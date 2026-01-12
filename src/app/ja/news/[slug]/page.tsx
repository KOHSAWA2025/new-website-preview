import type { Metadata } from "next";
import Image from "next/image";

import { Section } from "@/components/Section";
import feedbackImage from "@/pic/feedback.png";
import moriImage from "@/pic/20241122.png";

type Params = { slug: string };

const FEEDBACK_SUMMARY = {
  slug: "stage-based-user-feedback-summary-metabolic-support-food",
  title:
    "血糖関連の代謝健康のサポートを目的とした食品グレード製品に関する段階別ユーザーフィードバック要約",
  dateDisplay: "2026年1月12日",
  body: `概要
本製品は、Os’ Lab による ZOOOO 計算モデリングフレームワークに基づき、織田製薬の PPN 製造技術と組み合わせて開発された栄養補助食品です。
多経路の栄養介入によって代謝サポートを提供することを目的としており、医薬品ではありません。
実際の使用状況のパターンを把握するため、Os’ Lab は、日常使用の中で収集されたユーザーフィードバックおよび選定した健康関連指標について、段階別の観察的要約を実施しました。
以下の内容は、製品研究の透明性および技術的コミュニケーションのみを目的とした、非臨床・非介入の要約です。

観察設計
- 対象者：成人ユーザー 20 名
- 製品区分：栄養補助食品（食品グレード）
- 使用期間：約 90 日
- データ種別：自己申告による使用記録および定期的な健康診断結果
- 測定指標：HbA1c（3 時点で測定）

本要約は臨床試験に該当せず、診断・治療・予防の効果を示唆するものではありません。

観察された傾向の要約
観察期間を通じて、全参加者において 3 回の連続測定における HbA1c 値の一貫した低下傾向が確認されました。
観察データの主な特徴は以下のとおりです。
- 一貫性：観察期間中に持続的な上昇傾向を示した参加者はいませんでした
- 連続性：変化は短期的に急激な変動としてではなく、段階を追って緩やかに生じました
- 収束性：個別軌跡の分散は時間とともに比較的限定的でした

集計的観点からは、グループ全体として一方向の均一な傾向が示され、ユーザーの安定した関与と、比較的同質な応答パターンが示唆されます。

解釈（技術的観点）
モデリングの観点から、ZOOOO フレームワークは以下を重視します。
- 短期応答ではなく長期状態の推移
- 代謝プロセスにまたがる多経路の相互作用
- 単一の介入効果よりも構造安定性

この概念枠組みにおいて、観察された傾向は、HbA1c の回転特性に整合する時間スケールにおける持続的な代謝サポートプロファイルと整合する可能性があります。
ただし、因果関係を推定することはできず、機構的結論を確立するためには、さらなる対照化された研究が必要です。

データの透明性および限界
- サンプルサイズは限定的です
- 対照群は設定されていません
- 生活習慣要因は標準化されていません
- データは実験条件ではなく、実使用条件を反映しています

したがって、本結果は探索的・記述的なものとして解釈されるべきであり、検証的な結論ではありません。

結論
本段階別観察は、本製品が実使用条件下でどのように機能するかについての初期的な見取り図を提供します。
観察された傾向の一貫性と方向性は、継続的な技術検証と将来の構造化された研究を支持するとともに、透明性と責任あるデータコミュニケーションに対する Os’ Lab のコミットメントを補強します。

規制および使用上の免責事項
本製品は食品グレードであり、医薬品ではありません。
いかなる疾病の診断、治療、治癒、または予防を目的とするものではありません。
ここに提示される情報は研究および情報提供のみを目的としており、医療上の助言とみなされるべきではありません。
健康上の懸念がある方は、資格を有する医療専門職に相談してください。

お問い合わせや技術的なご相談は、メールにてお気軽にご連絡ください。
`,
} as const;

const MODEL_RELEASE_V061 = {
  slug: "research-preview-zoooo-betacell-expert-8b-v0-6-1",
  title: "ZOOOO-BetaCell-Expert-8B v0.6.1（研究プレビュー）公開のお知らせ",
  dateDisplay: "2026年1月10日",
  link: "https://huggingface.co/OsLab2025/ZOOOO-BetaCell-Expert-8B-v0.6.1",
  bodyJa: `膵臓β細胞生物学における機構的推論に焦点を当てた研究プレビューモデルとして、ZOOOO-BetaCell-Expert-8B v0.6.1 を公開しました。

本バージョンは、因果を起点とする分析、明示的な境界条件、構造化された機構的判断を重視し、経路の列挙や記述的要約を超えることを目指します。v0.6.1 では、相関と因果の識別、および実験的関連性に関する推論の一貫性が改善されており、仮説の議論および実験設計のレビューに適しています。

制約は残ります：応答構造が複雑な問いに対して常に十分に収束するとは限らず、長い対話における安定性も依然として限定的です。また、本モデルは臨床用途または本番用途に使用すべきではありません。v0.6.1 は、専門家レベルの科学推論協働者という v1.0 の目標に向けた安定したマイルストーンです。
`,
} as const;

const MODEL_RELEASE_V04 = {
  slug: "release-zoooo-betacell-expert-7b-v0-4-baseline",
  title: "ZOOOO-BetaCell-Expert-7B-v0.4 ベースラインモデル公開のお知らせ",
  dateDisplay: "2026年1月2日",
  link: "https://huggingface.co/OsLab2025/ZOOOO-BetaCell-Expert-7B-v0.4",
  body: `ZOOOO-BetaCell-Expert-7B-v0.4 は、膵臓ベータ細胞の生物学に焦点を当てた領域特化型エキスパートモデルです。

本リリースは、Os’ Lab の独自開発による ZOOOO モデルを基盤として導出された、仮想ベータ細胞エキスパートモデルの独立派生版です。
織田製薬株式会社の PPN 技術との技術協力および領域知見の反映により、共同で情報的に裏付けられています。

v0.4 は ZOOOO（mini version）モデルの上に構築されています。
ZOOOO は Os’ Lab が自社設計・開発したクローズドソースの基盤モデルであり、
そのアーキテクチャと学習思想は、構造的推論および制約整合学習に基づいています。

ZOOOO-BetaCell-Expert-7B-v0.4 は、ZOOOO 仮想ベータ細胞系列のための凍結されたベースラインモデルとして公開します。
継続的な更新を目的とするものではなく、
v0.5 以降の後続バージョンに対して、安定かつ明確に定義された参照点を提供することを目的としています。

今後の反復は、このベースラインの上に段階的に積み上げる形で開発され、
因果整合性、推論の安定性、および領域特化の精緻化に重点を置きます。

---

### v0.1 との比較

v0.1 と比較すると、v0.4 はモデルの基盤と安定性の双方において決定的な転換を示します。

v0.1 は、外部の既存モデルを独自データセットで適応させることで構築されましたが、
v0.4 は Os’ Lab の自社設計である ZOOOO（mini version）モデルの上に直接構築され、
領域特化データとともに共同最適化されています。

その結果、v0.4 は内部整合性、安定性、および因果推論の整合性が大きく向上しており、
仮想ベータ細胞モデリングのための、より強固で信頼できるベースラインを確立します。

モデルページ：
https://huggingface.co/OsLab2025/ZOOOO-BetaCell-Expert-7B-v0.4`,
} as const;

const MODEL_RELEASE = {
  slug: "release-zoooo-betacell-expert-7b-v0-1",
  title: "公開：ZOOOO-BetaCell-Expert-7B-v0.1",
  dateDisplay: "2026年1月2日",
  link: "https://huggingface.co/OsLab2025/ZOOOO-BetaCell-Expert-7B-v0.1",
  body: `モデル「ZOOOO-BetaCell-Expert-7B-v0.1」を公開しました。

本モデルは Virtual Cell のエキスパートモデルであり、os’ lab の ZOOOO フレームワークと、織田製薬株式会社 の P.P.N. 技術を組み合わせて共同で開発しました。

本モデルは Hugging Face 上に公開済みです：
https://huggingface.co/OsLab2025/ZOOOO-BetaCell-Expert-7B-v0.1

あわせて、ZOOOO モデルのオープンソース（特別に調整した）版の公開についても検討を進める予定です。`,
} as const;

const ANNOUNCEMENT = {
  slug: "meeting-with-diet-member-eisuke-mori",
  title: "森英介議員との会談で描く日本のAI未来図",
  date: "2024-11-22",
  body: `2024年11月22日、オーズラボ株式会社の関係者と、
東京大学大学院システム創成学の関係者は、
自由民主党所属の衆議院議員で元法務大臣、
前衆議院憲法審査会長を務めた森英介議員を訪問しました。

森議員は東北大学工学部出身で、
川崎重工業での勤務経験を経て工学博士を取得されるなど、
技術と政策の両面から社会システムを設計してこられた
豊富な経験を有しておられます。

本会談では、人工知能（AI）技術の
日本および国際社会における将来的な応用可能性について、
社会的規範や公共的視点を踏まえた議論が行われました。

同席者からは、
これまでの人工知能研究の動向、
共同研究の成果、
ならびにAI技術を用いた
社会的リスク予測、産業応用、医療分野への展開可能性について
説明が行われました。

また、データ連携型の知識生成や、
潜在的事象の分析、
将来の社会的・産業的機会の評価といった
取り組みが紹介され、
AI技術がもたらす革新の可能性について
意見交換が行われました。

森議員は、
今回紹介された独自性の高い技術は
日本の技術革新を支える基盤となり得るものであり、
本分野のさらなる発展に期待を寄せる旨を述べられました。

同席者は、
「AI技術は単なる技術的進化にとどまらず、
人とのインタラクションを適切に設計することで、
社会課題に対して有効な解決策を提供できる」
とコメントし、
知識共有の重要性を強調しました。

別の同席者は、
「本日の会談を通じて、
我々の技術が日本社会にどのように貢献できるのかを
再確認する機会となった」
と述べ、
産官学連携を通じた
次世代モデリング技術の発展への意欲を示しました。`,
} as const;

const NEW_YEARS_MESSAGE = {
  slug: "new-years-message-2025",
  title: "新春のご挨拶\n「AIと共に切り拓く未来社会への挑戦」",
  dateDisplay: "2025年1月1日",
  signature: `オーズラボ株式会社\n代表取締役　松本慎一`,
  body: `謹んで初春のお慶びを申し上げます

皆様にとって2025年が実り多く、希望に満ちた一年となりますよう心よりお祈り申し上げます。

AI技術活用の加速を実感した2024年

2024年は、AI技術が社会に深く浸透し、各分野での活用が大きく加速した一年でした。
まず、AIモデルの進化とコスト削減により、これまで実現が難しかった応用領域での活用が急速に進展しました。
私たちオーズラボ株式会社でも、この流れを受け、植物成分の遺伝情報を調整するPPN技術を軸に、新たなAIソリューションを開発・提供しました。
特に、糖尿病や痛風といった慢性疾患に対する健康食品の分野では、PPN技術を基にした製品が市場で高い評価を得ています。
これらは単なる技術成果に留まらず、人々の生活に新たな可能性を生み出す実例となりました。
さらに、AIの活用は医薬やヘルスケアのみならず、教育、公共サービス、ビジネスインテリジェンスといった多様な分野へと広がり、AIがもたらす新しいコミュニケーションや問題解決の形が日常生活に溶け込んできています。
この動きは、AIと人間の新しい関係性を構築する重要なステップとなりました。

AI技術が創る未来への期待

2025年に入り、AI技術のさらなる進化が期待されています。
その中で、私たちは「AIを何のために活用するのか」「AIと共に歩む未来をどう描くのか」という問いを重視しています。
技術そのものが目的ではなく、それを通じていかに社会や個々人の可能性を広げるかが、私たちの挑戦の核心です。
例えば、オーズラボ株式会社のPPN技術を基盤とした製品開発は、AIが持つ分析力や予測能力を駆使して、従来の医薬学では難しかった課題の解決を実現しました。
また、シンガポールやカリフォルニア州にある研究所との連携を通じて、グローバルな視点でAI技術の可能性を探ることができました。これにより、ヘルスケア分野のみならず、環境保護や農業の効率化といった新しい領域での応用可能性も見えてきています。

AIと人が共進化する社会へ

2025年以降、AI技術の応用が加速する中で、「技術を通じて私たちは何を実現したいのか」という問いが、これまで以上に重要になります。
AIは人間の知性を補完し、新たな価値を生み出すパートナーとしての役割を担います。
そのために、私たちオーズラボは、AIと人が共進化する社会の実現を目指し、研究と実装のサイクルをさらに強化していきます。
本年も、皆様と共に未来を切り拓いていけることを楽しみにしております。
引き続きご支援とご指導を賜りますよう、何卒よろしくお願い申し上げます。
`,
} as const;

const NEW_YEARS_MESSAGE_2026 = {
  slug: "new-years-message-2026",
  title: "新年のご挨拶\n新体制のもとで迎える 2026 年に向けて",
  dateDisplay: "2026年1月1日",
  signature: `2026年 元旦\nオーズラボ株式会社\n代表取締役 大澤顕治`,
  body: `謹んで新年のお慶びを申し上げます。

2026 年の年頭にあたり、
日頃よりオーズラボ株式会社を支えてくださっている
すべての皆様に、心より御礼申し上げます。

本年より、私は松本慎一教授からバトンを受け継ぎ、
オーズラボ株式会社の代表取締役として
新たな役割を担うこととなりました。
これまで同社が築いてきた研究と実装の姿勢を尊重しつつ、
一層社会に開かれた形で発展させていく責任を感じています。

私自身の研究背景と、
当社が開発してきた独自の AI 技術を基盤に、
オーズラボは新薬創出の分野において
具体的な成果を積み重ねてきました。
限られた時間と資源の中で、
有効な介入点を見出すこと。
その積み重ねが、確かな手応えとして現れています。

一方で、私たちの技術は
創薬という領域にとどまるものではありません。
構造を起点に世界を理解し、
複雑な系に対して責任ある判断を支えるという考え方は、
より広い社会の課題にも応用できると考えています。

足元の成果を大切にしながら、
研究と実装を地道に積み重ねること。
そして、社会にとって意味のある形で
技術を育てていくこと。
それが、新体制のもとでのオーズラボの基本姿勢です。

本年も皆様と共に、
一歩ずつ前に進んでいけることを願っております。
引き続きのご指導、ご支援を賜りますよう、
何卒よろしくお願い申し上げます。`,
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
      return "研究・学術";
    case "product":
      return "プロダクト";
    case "society":
      return "社会・政策";
  }
}

function renderParagraphs(text?: string) {
  if (!text) return null;
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
  title: "お知らせ",
};

export default async function JaNewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const publication = PUBLICATIONS.find((p) => p.slug === slug);
  const isFeedbackSummary = slug === FEEDBACK_SUMMARY.slug;
  const isAnnouncement = slug === ANNOUNCEMENT.slug;
  const isNewYearsMessage = slug === NEW_YEARS_MESSAGE.slug;
  const isNewYearsMessage2026 = slug === NEW_YEARS_MESSAGE_2026.slug;
  const isModelReleaseV061 = slug === MODEL_RELEASE_V061.slug;
  const isModelRelease = slug === MODEL_RELEASE.slug;
  const isModelReleaseV04 = slug === MODEL_RELEASE_V04.slug;

  const category: NewsCategory | null = publication
    ? "research"
    : isFeedbackSummary
      ? "product"
    : isModelReleaseV061
      ? "research"
    : isModelRelease || isModelReleaseV04
      ? "product"
      : isAnnouncement || isNewYearsMessage || isNewYearsMessage2026
        ? "society"
        : null;

  const title = publication?.title
    ?? (isAnnouncement
      ? ANNOUNCEMENT.title
      : isFeedbackSummary
        ? FEEDBACK_SUMMARY.title
      : isNewYearsMessage2026
        ? NEW_YEARS_MESSAGE_2026.title
        : isModelReleaseV061
          ? MODEL_RELEASE_V061.title
        : isModelReleaseV04
          ? MODEL_RELEASE_V04.title
        : isModelRelease
          ? MODEL_RELEASE.title
        : isNewYearsMessage
          ? NEW_YEARS_MESSAGE.title
          : slug);
  const date =
    publication?.date
    ?? (isAnnouncement
      ? ANNOUNCEMENT.date
      : isFeedbackSummary
        ? FEEDBACK_SUMMARY.dateDisplay
      : isNewYearsMessage2026
        ? NEW_YEARS_MESSAGE_2026.dateDisplay
        : isModelReleaseV061
          ? MODEL_RELEASE_V061.dateDisplay
        : isModelReleaseV04
          ? MODEL_RELEASE_V04.dateDisplay
        : isModelRelease
          ? MODEL_RELEASE.dateDisplay
        : isNewYearsMessage
          ? NEW_YEARS_MESSAGE.dateDisplay
          : "日付は追って掲載します。");

  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="whitespace-pre-line break-words text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-700">
          {date}
        </p>
      </div>

      {isFeedbackSummary ? (
        <div className="pt-8">
          <Image
            src={feedbackImage}
            alt="ユーザーフィードバック要約"
            className="h-auto w-full"
            priority
          />
        </div>
      ) : null}

      <Section title="詳細">
        {publication ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "research")}
            </p>
            <p>
              <span className="text-neutral-700">掲載誌</span>
              <br />
              {publication.journal}
            </p>
            <p>
              <span className="text-neutral-700">公開日</span>
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
            <p className="text-neutral-700">本文は追って掲載します。</p>
          </div>
        ) : isFeedbackSummary ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "product")}
            </p>

            <div>{renderParagraphs(FEEDBACK_SUMMARY.body)}</div>
          </div>
        ) : isModelReleaseV061 ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "research")}
            </p>

            <div>{renderParagraphs(MODEL_RELEASE_V061.bodyJa)}</div>

            <p>
              <a
                href={MODEL_RELEASE_V061.link}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                {MODEL_RELEASE_V061.link}
              </a>
            </p>
          </div>
        ) : isNewYearsMessage2026 ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "society")}
            </p>

            <div>{renderParagraphs(NEW_YEARS_MESSAGE_2026.body)}</div>

            <div className="pt-6 whitespace-pre-line">{NEW_YEARS_MESSAGE_2026.signature}</div>
          </div>
        ) : isNewYearsMessage ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "society")}
            </p>

            <div>{renderParagraphs(NEW_YEARS_MESSAGE.body)}</div>

            <div className="pt-6 whitespace-pre-line">{NEW_YEARS_MESSAGE.signature}</div>
          </div>
        ) : isModelReleaseV04 ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "product")}
            </p>

            <div>{renderParagraphs(MODEL_RELEASE_V04.body)}</div>

            <p>
              <span className="text-neutral-700">リンク</span>
              <br />
              <a
                href={MODEL_RELEASE_V04.link}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                {MODEL_RELEASE_V04.link}
              </a>
            </p>
          </div>
        ) : isModelRelease ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "product")}
            </p>

            <div>{renderParagraphs(MODEL_RELEASE.body)}</div>

            <p>
              <span className="text-neutral-700">リンク</span>
              <br />
              <a
                href={MODEL_RELEASE.link}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-black/20 hover:text-neutral-950"
              >
                {MODEL_RELEASE.link}
              </a>
            </p>
          </div>
        ) : isAnnouncement ? (
          <div className="space-y-6">
            <p>
              <span className="text-neutral-700">分類</span>
              <br />
              {categoryLabel(category ?? "society")}
            </p>
            <div className="pt-2">
              <Image
                src={moriImage}
                alt="森英介議員との会談"
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="whitespace-pre-line">{ANNOUNCEMENT.body}</div>
          </div>
        ) : (
          <p>詳細は追って掲載します。</p>
        )}
      </Section>
    </div>
  );
}
