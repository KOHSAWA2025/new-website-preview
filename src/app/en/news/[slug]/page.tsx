import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import moriImage from "@/pic/20241122.png";

type Params = { slug: string };

const ANNOUNCEMENT = {
  slug: "discussing-japans-ai-future-with-diet-member-eisuke-mori",
  title: "Discussing Japan’s AI Future with Diet Member Eisuke Mori",
  journal: "",
  date: "2024-11-22",
  url: "",
  body: `On November 22, 2024, Oda Kenpou, Special Advisor to os’ lab co., ltd,
together with Professor Yukio Ohsawa of the University of Tokyo,
visited Mr. Eisuke Mori, Member of the House of Representatives,
former Minister of Justice, and former Chair of the Constitutional Review Committee.

Mr. Mori, who holds a Ph.D. in engineering and has professional experience
at Kawasaki Heavy Industries,
has long worked at the intersection of technology and public policy.
The meeting focused on the future applications and societal implications
of artificial intelligence in Japan and in the global context.

During the discussion, Professor Ohsawa and Mr. Oda
outlined recent trends in AI research,
ongoing collaborative projects,
and the social significance of AI-driven approaches.
They exchanged views on applications of AI
in social risk assessment, industry, public policy, and medicine.

They also introduced efforts in data-linked knowledge generation,
latent event analysis,
and evaluation of future societal and industrial opportunities,
highlighting the transformative potential of AI technologies.

Mr. Mori expressed his appreciation for the originality of the technologies presented,
noting their potential importance
as part of the foundation supporting Japan’s technological innovation.

Professor Ohsawa emphasized that AI is not merely a technical advancement,
but a tool that—when properly designed for human interaction—
can offer powerful solutions to complex societal challenges.

Mr. Oda commented that the meeting reaffirmed
how their technologies could contribute to Japanese society,
and expressed a strong commitment to advancing next-generation modeling technologies
through closer collaboration between academia, industry, and government.`,
} as const;

const NEW_YEARS_MESSAGE = {
  slug: "new-years-message-2025",
  title: "New Year’s Message: Shaping a Future Society Together with AI",
  dateDisplay: "January 1, 2025",
  signature: `オーズラボ株式会社\n代表取締役　松本慎一`,
  body: `I would like to extend my sincere New Year’s greetings.

I hope 2025 will be a fruitful year filled with hope for all of you.

2024: A year when we felt the acceleration of AI adoption

In 2024, AI became more deeply embedded in society, and adoption accelerated across many fields.
First, advances in AI models and cost reductions led to rapid progress in application areas that were previously difficult to realize.
At os’ lab co., ltd, in response to this trend, we developed and delivered new AI solutions centered on our PPN technology, which adjusts genetic information in plant-derived ingredients.
In particular, in the field of health foods for chronic conditions such as diabetes and gout, products based on PPN technology have been highly evaluated in the market.
These outcomes are not only technical results, but concrete examples that create new possibilities in people’s lives.
Furthermore, AI adoption has expanded beyond medicine and healthcare into education, public services, and business intelligence.
New forms of communication and problem-solving enabled by AI are beginning to blend into daily life.
This has been an important step toward building a new relationship between AI and people.

Expectations for the future shaped by AI

As we enter 2025, further progress in AI is expected.
Within that, we place importance on the questions: “What is AI for?” and “What kind of future do we draw together with AI?”
Technology itself is not the goal.
The core challenge is how to expand possibilities for society and for individuals through it.
For example, our product development based on PPN technology has used AI’s analytical and predictive capabilities to solve issues that were difficult within conventional medical science.
Through collaboration with research institutes in Singapore and California, we have also explored AI’s potential from a global perspective.
As a result, possibilities are emerging not only in healthcare, but also in new areas such as environmental protection and improving agricultural efficiency.

Toward a society where AI and people co-evolve

As AI applications accelerate from 2025 onward, the question “What do we want to achieve through technology?” becomes even more important.
AI will serve as a partner that complements human intelligence and creates new value.
With that in mind, at os’ lab we will further strengthen the cycle of research and implementation toward realizing a society where AI and people co-evolve.
We look forward to shaping the future together with all of you this year as well.
We sincerely ask for your continued support and guidance.`,
} as const;

const NEW_YEARS_MESSAGE_2026 = {
  slug: "new-years-message-2026",
  title: "New Year’s Message\nEntering 2026 under New Leadership",
  dateDisplay: "January 1, 2026",
  signature: `January 1, 2026\nCEO  Kenji OHSAWA\nos’ lab co., ltd`,
  body: `I would like to extend my sincere New Year’s greetings.

As we begin 2026, I would like to express my heartfelt
gratitude to everyone who continues to support
os’ lab co., ltd.

This year, I have assumed the role of CEO,
taking over the responsibilities from
Professor Shinichi Matsumoto.
While respecting the research-driven foundation
that the company has built,
I am keenly aware of my responsibility
to guide os’ lab toward a more open
and socially engaged future.

Drawing on my own research background
and the AI technologies developed within the company,
os’ lab has steadily achieved tangible results
in the field of drug discovery.
Identifying effective points of intervention
under real-world constraints
has become a concrete and repeatable outcome of our work.

At the same time, we believe that our approach
is not limited to drug discovery alone.
Starting from structure,
and aiming to support responsible decision-making
in complex systems,
our technology has the potential
to contribute to broader societal challenges.

By valuing steady progress,
strengthening the cycle between research and implementation,
and remaining grounded in real outcomes,
we aim to cultivate our technology
in ways that are genuinely meaningful to society.

I look forward to moving forward together with all of you
in the year ahead.
Thank you for your continued guidance and support.`,
} as const;

const PUBLICATIONS = [
  {
    slug: "publication-support-field-neural-representation-learner-framework",
    title:
      "Support field neural representation learner framework for learning stability landscapes in molecular geometry",
    journal: "npj Biomedical Innovations",
    date: "2025-11-26",
    url: "https://www.nature.com/articles/s44385-025-00045-7",
  },
  {
    slug: "publication-multi-modal-topology-aware-gnn-for-cpi",
    title:
      "Multi-Modal Topology-Aware Graph Neural Network for Robust Chemical–Protein Interaction Prediction",
    journal: "International Journal of Molecular Sciences",
    date: "2025-09-05",
    url: "https://www.mdpi.com/1422-0067/26/17/8666",
  },
  {
    slug: "publication-tcocpin-reveals-topological-characteristics",
    title:
      "TCoCPIn reveals topological characteristics of chemical protein interaction networks for novel feature discovery",
    journal: "Scientific Reports",
    date: "2025-05-18",
    url: "https://www.nature.com/articles/s41598-025-01410-7",
  },
] as const;

type NewsCategory = "research" | "product" | "society";

function categoryLabel(category: NewsCategory) {
  switch (category) {
    case "research":
      return "Research";
    case "product":
      return "Product";
    case "society":
      return "Society";
  }
}

function renderParagraphs(text: string) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((block, idx) => (
      <p key={idx} className={"whitespace-pre-line" + (idx === 0 ? "" : " mt-6")}>
        {block}
      </p>
    ));
}

export const metadata: Metadata = {
  title: "News",
};

export default async function EnNewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const publication = PUBLICATIONS.find((p) => p.slug === slug);
  const isAnnouncement = slug === ANNOUNCEMENT.slug;
  const isNewYearsMessage = slug === NEW_YEARS_MESSAGE.slug;
  const isNewYearsMessage2026 = slug === NEW_YEARS_MESSAGE_2026.slug;

  const category: NewsCategory | null = publication
    ? "research"
    : isAnnouncement || isNewYearsMessage || isNewYearsMessage2026
      ? "society"
      : null;

  const title = publication?.title
    ?? (isAnnouncement
      ? ANNOUNCEMENT.title
      : isNewYearsMessage2026
        ? NEW_YEARS_MESSAGE_2026.title
        : isNewYearsMessage
          ? NEW_YEARS_MESSAGE.title
          : slug);
  const date = publication?.date
    ?? (isAnnouncement
      ? ANNOUNCEMENT.date
      : isNewYearsMessage2026
        ? NEW_YEARS_MESSAGE_2026.dateDisplay
        : isNewYearsMessage
          ? NEW_YEARS_MESSAGE.dateDisplay
          : "Date will be added.");

  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="whitespace-pre-line text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-700">
          {date}
        </p>
      </div>

      <Section title="Details">
        {publication ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">Category</span>
              <br />
              {categoryLabel(category ?? "research")}
            </p>
            <p>
              <span className="text-neutral-700">Journal</span>
              <br />
              {publication.journal}
            </p>
            <p>
              <span className="text-neutral-700">Publication date</span>
              <br />
              {publication.date}
            </p>
            <p>
              <span className="text-neutral-700">DOI / URL</span>
              <br />
              <a
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                {publication.url}
              </a>
            </p>
            <p className="text-neutral-700">Content will be added.</p>
          </div>
        ) : isNewYearsMessage2026 ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">Category</span>
              <br />
              {categoryLabel(category ?? "society")}
            </p>

            <div>{renderParagraphs(NEW_YEARS_MESSAGE_2026.body)}</div>

            <div className="pt-6 whitespace-pre-line">{NEW_YEARS_MESSAGE_2026.signature}</div>
          </div>
        ) : isNewYearsMessage ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">Category</span>
              <br />
              {categoryLabel(category ?? "society")}
            </p>

            <div>{renderParagraphs(NEW_YEARS_MESSAGE.body)}</div>

            <div className="pt-6 whitespace-pre-line">{NEW_YEARS_MESSAGE.signature}</div>
          </div>
        ) : isAnnouncement ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">Category</span>
              <br />
              {categoryLabel(category ?? "society")}
            </p>
            <div className="pt-2">
              <Image
                src={moriImage}
                alt="Meeting with Diet Member Eisuke Mori"
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="whitespace-pre-line">{ANNOUNCEMENT.body}</div>
          </div>
        ) : (
          <p>Details will be added.</p>
        )}
      </Section>
    </div>
  );
}
