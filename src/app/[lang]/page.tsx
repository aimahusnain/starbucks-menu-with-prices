import Herosection from "@/components/Herosection";
import languages from "@/config/language.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { getActiveLanguages } from "@/lib/languageParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import path from "path";
import { FaCheck } from "react-icons/fa";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: "Starbucks",
  image: "/starbucks.png",
  description: "product.description",
}

const Home = ({ params }: { params: { lang: string } }) => {
  const lang = params.lang;
  const language = languages.find(
    (language) => language.languageCode === lang,
  )!;
  const homepage = getListPage(
    path.join(language?.contentDir, "homepage/_index.md"),
  );
  const testimonial = getListPage(
    path.join(language.contentDir, "sections/testimonial.md"),
  );
  const callToAction = getListPage(
    path.join(language.contentDir, "sections/call-to-action.md"),
  );
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      {/* <section className="section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-7 md:col-9 mb-8 text-center">
              <h1
                className="mb-4 text-h3 lg:text-h1"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.button!.enable && (
                <Link
                  className="btn btn-primary"
                  href={banner.button!.link}
                  target={
                    banner.button!.link.startsWith("http") ? "_blank" : "_self"
                  }
                  rel="noopener"
                >
                  {banner.button!.label}
                </Link>
              )}
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section> */}

      <Herosection />



      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
