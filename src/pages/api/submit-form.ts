import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone, details } = req.body;

      // Payload for the CTM API
      const payload = {
        contact: {
          number: phone,
          first_name: firstName,
          last_name: lastName,
          email: email,
          details: details,
        },
      };

      // Fetch your API credentials from environment variables
      const accessKey = process.env.CTM_ACCESS_KEY;
      const secretKey = process.env.CTM_SECRET_KEY;
      const authToken = process.env.CTM_AUTH_TOKEN;
      const accountId = process.env.AccountId;
      const contactListId = process.env.ContactListId;

      if (!accessKey || !secretKey || !authToken || !accountId || !contactListId) {
        return res.status(400).json({ error: 'CTM API credentials are missing' });
      }

      // Construct the API URL for adding a contact
      const apiUrl = `https://api.calltrackingmetrics.com/api/v1/accounts/${accountId}/lists/${contactListId}/add_contact`;

      // Send the POST request to the CTM API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`${accessKey}:${secretKey}`).toString('base64')}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return res.status(500).json({ error: `Failed to send data to the CTM API: ${errorData.message}` });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      // Type assertion to cast `error` as `Error`
      const typedError = error as Error;
      return res.status(500).json({ error: typedError.message });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
