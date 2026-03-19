import { Reveal } from '../components/Reveal'
import { useI18n } from '../i18n/useI18n'

type Copy = {
  hero: { kicker: string; title: string; subtitle: string }
  statement: { kicker: string; lines: string[]; body: string[] }
  highlights: { kicker: string; headline: string; items: string[]; note: string }
  structure: { kicker: string; headline: string; items: string[] }
  impact: { kicker: string; headline: string; body: string[]; bullets: string[] }
  scientific: { kicker: string; headline: string; body: string[] }
  vision: { kicker: string; headline: string }
}

const copyByLocale: Record<'en' | 'ja', Copy> = {
  en: {
    hero: {
      kicker: 'TECHNOLOGY / VIRTUAL CELL',
      title: 'Emergent Pancreatic β-Cell Dynamics from Mechanistic Virtual Cell Modeling',
      subtitle:
        'A proprietary virtual cell system built on our original modeling framework and powered by Zoooo, reproducing ER-stress–driven apoptosis through intrinsic biochemical dynamics',
    },
    statement: {
      kicker: 'CORE STATEMENT',
      lines: [
        'We present a mechanistic virtual pancreatic β-cell model in which cellular fate emerges entirely from intrinsic biochemical dynamics,',
        'without any externally imposed rules.',
      ],
      body: [
        'Under sustained ER stress, the system autonomously transitions from a stable metabolic state to apoptosis through UPR signaling and chronic CHOP activation.',
        'In a representative simulation, the β-cell undergoes apoptosis after approximately 40 minutes of simulated time — a timescale that is fully consistent with real biological behavior under acute ER stress, and achieved without any predefined death triggers or manual intervention.',
        'This result highlights that the model captures true biological causality, rather than reproducing pre-programmed outcomes.',
      ],
    },
    highlights: {
      kicker: 'HIGHLIGHTS',
      headline: 'Mechanism-first simulation.',
      items: [
        'Apoptosis emerges spontaneously from internal biochemical dynamics (no hard-coded rules)',
        'Tight coupling across metabolism, signaling, and gene regulation',
        'Mechanistically consistent ER-stress response behavior',
        'Continuous-time simulation without discrete forcing',
        'Experiment-level temporal realism (~40 min apoptosis onset, biologically validated)',
      ],
      note: 'Apoptosis onset: ~40 minutes (simulated time)',
    },
    structure: {
      kicker: 'TECHNICAL DESCRIPTION',
      headline: 'The virtual β-cell is built upon our proprietary mechanistic modeling framework and powered by the Zoooo platform.',
      items: [
        'Metabolic flux dynamics',
        'Calcium signaling and electrophysiology',
        'ER stress and unfolded protein response (UPR)',
        'Gene regulatory feedback',
        'Continuous lifecycle state transitions',
        'All modules are dynamically coupled, forming a unified system in which cross-scale biological interactions drive system-level behavior.',
      ],
    },
    impact: {
      kicker: 'REAL-WORLD IMPACT',
      headline: 'This technology is already in real-world deployment.',
      body: [
        'Oda Pharmaceutical has successfully adopted this virtual cell system in its drug discovery pipeline.',
        'Using this platform, Oda Pharmaceutical has:',
        'This demonstrates that mechanistic virtual cell modeling is not only scientifically valid, but also mature and industrially applicable.',
      ],
      bullets: [
        'Established virtual β-cell–based disease modeling systems',
        'Accelerated compound screening through mechanism-level evaluation',
        'Successfully developed and advanced multiple therapeutic candidates',
        'Particularly in:',
        'Type 2 Diabetes',
        'Gout and metabolic disorders',
      ],
    },
    scientific: {
      kicker: 'SCIENTIFIC NOTE',
      headline: 'Apoptosis emerges as:',
      body: ['ER stress → UPR → chronic CHOP activation → apoptosis'],
    },
    vision: {
      kicker: 'VISION',
      headline:
        'This work represents a shift toward true mechanistic digital cells, where life-like behavior emerges from integrated biological processes rather than predefined rules or approximations.',
    },
  },
  ja: {
    hero: {
      kicker: '技術 / バーチャル細胞',
      title: '機構的仮想細胞モデリングによる膵β細胞ダイナミクスの創発',
      subtitle:
        '独自理論とZooooプラットフォームに基づく仮想細胞システムが、ERストレス誘導アポトーシスを内在的生化学ダイナミクスから再現',
    },
    statement: {
      kicker: '要点',
      lines: [
        '本システムは、外部から細胞運命を一切規定することなく、内在的な生化学ダイナミクスのみから細胞挙動を創発させる',
        '機構論的仮想膵β細胞モデルです。',
      ],
      body: [
        '持続的なERストレス環境下において、細胞はUPRシグナルおよびCHOPの慢性的活性化を介し、安定状態からアポトーシスへと自律的に遷移します。',
        '特筆すべき点として、本モデルではβ細胞が約40分でアポトーシスへ移行します。この時間スケールは、実際の急性ERストレス下における細胞応答と極めて高い一致性を示しており、一切の人工的トリガーや寿命設定を用いずに実現されています。',
        'これは、本モデルが単なる挙動再現ではなく、生物学的因果構造を正しく捉えていることを示しています。',
      ],
    },
    highlights: {
      kicker: 'ハイライト',
      headline: '機構から組み上げる。',
      items: [
        'アポトーシスは内部ダイナミクスから自発的に発生（外部ルールなし）',
        '代謝・シグナル・遺伝子発現が密結合',
        'ERストレス応答の機構的一貫性',
        '連続時間シミュレーション（離散制御なし）',
        '約40分という実験レベルの時間再現性（生物学的整合性あり）',
      ],
      note: 'アポトーシス発現：シミュレーション時間 約40分',
    },
    structure: {
      kicker: '技術概要',
      headline: '本仮想β細胞は、当社独自の機構論的モデリング技術とZooooプラットフォームを基盤として構築されています。',
      items: [
        '代謝フラックス動態',
        'カルシウムシグナリングおよび電気生理',
        'ERストレスおよびUPR応答',
        '遺伝子発現フィードバック制御',
        '連続的な細胞状態遷移',
        'これらは動的に結合され、スケール横断的な相互作用によって細胞挙動が決定されます。',
      ],
    },
    impact: {
      kicker: '実運用',
      headline: '本技術はすでに実運用段階にあります。',
      body: [
        '織田製薬（Oda Pharmaceutical）において本仮想細胞システムが導入され、創薬パイプラインの中で活用されています。',
        '本技術により：',
        'これは、本仮想細胞技術が研究段階を超えた、実用的かつ成熟した創薬エンジンであることを示しています。',
      ],
      bullets: [
        '仮想β細胞を用いた疾患モデリングを確立',
        'メカニズムベース評価によるスクリーニングを高速化',
        '複数の有望な治療候補の創出に成功',
        '特に以下領域で成果を上げています：',
        '2型糖尿病',
        '痛風および代謝疾患',
      ],
    },
    scientific: {
      kicker: '科学的注記',
      headline: 'アポトーシスは',
      body: ['ERストレス → UPR → CHOP（慢性活性化）→ アポトーシス', 'として創発する'],
    },
    vision: {
      kicker: 'ビジョン',
      headline:
        '本研究は、ルールや近似ではなく、生物学的プロセスの統合から生命様挙動が創発する「機構的デジタル細胞」への転換を示すものです。',
    },
  },
}

export function TechnologyVirtualCellPage() {
  const { locale } = useI18n()
  const c = copyByLocale[locale]

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-[color:var(--divider)]">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{c.hero.kicker}</div>
            <h1 className="display mt-6">{c.hero.title}</h1>
            <p className="subtext mt-6 max-w-[80ch]">{c.hero.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-b border-[color:var(--divider)]">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{c.statement.kicker}</div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Reveal className="lg:col-span-7">
              <div className="rounded-lg border border-[color:var(--divider)] bg-[color:var(--surface-2)] p-8">
                <div className="text-[22px] md:text-[28px] leading-[1.08] font-semibold tracking-tighter text-[color:var(--text)]">
                  {c.statement.lines.map((ln) => (
                    <div key={ln}>{ln}</div>
                  ))}
                </div>
                <div className="mt-6 space-y-2 text-[14px] leading-[1.7] text-[color:var(--text-2)]">
                  {c.statement.body.map((p) => (
                    <div key={p}>{p}</div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.06}>
              <div className="rounded-lg border border-[color:var(--accent)]/40 bg-[color:var(--surface)] p-8">
                <div className="kicker">{c.scientific.kicker}</div>
                <div className="mt-6 text-[16px] font-semibold tracking-tighter">{c.scientific.headline}</div>
                <div className="mt-4 space-y-2 text-[13px] leading-[1.65] text-[color:var(--text-2)] font-mono">
                  {c.scientific.body.map((p) => (
                    <div key={p}>{p}</div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-[color:var(--divider)]">
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{c.highlights.kicker}</div>
            <h2 className="headline mt-6">{c.highlights.headline}</h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.highlights.items.map((it, idx) => (
              <Reveal key={it} delay={0.05 * idx}>
                <div className="hairline rounded-lg p-7 h-full">
                  <div className="text-[15px] leading-[1.55] text-[color:var(--text)]">{it}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-6 text-[13px] text-[color:var(--text-muted)]">{c.highlights.note}</div>
          </Reveal>
        </div>
      </section>

      {/* STRUCTURE + IMPACT */}
      <section className="border-b border-[color:var(--divider)]">
        <div className="container-x py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Reveal className="lg:col-span-6">
              <div className="hairline rounded-lg p-8 h-full">
                <div className="kicker">{c.structure.kicker}</div>
                <div className="mt-6 text-[18px] font-semibold tracking-tighter">{c.structure.headline}</div>
                <ul className="mt-6 space-y-2 text-[13px] text-[color:var(--text-2)]">
                  {c.structure.items.map((m) => (
                    <li key={m} className="flex gap-3">
                      <span className="text-[color:var(--text-muted)]">—</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6" delay={0.06}>
              <div className="hairline rounded-lg p-8 h-full">
                <div className="kicker">{c.impact.kicker}</div>
                <div className="mt-6 text-[18px] font-semibold tracking-tighter">{c.impact.headline}</div>
                <div className="mt-6 space-y-2 text-[13px] leading-[1.6] text-[color:var(--text-2)]">
                  {c.impact.body.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
                {c.impact.bullets.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-[13px] text-[color:var(--text-2)]">
                    {c.impact.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="text-[color:var(--text-muted)]">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section>
        <div className="container-x py-16 md:py-24">
          <Reveal>
            <div className="kicker">{c.vision.kicker}</div>
            <h2 className="headline mt-6">{c.vision.headline}</h2>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
