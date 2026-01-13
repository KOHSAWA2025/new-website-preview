import type { Metadata } from "next";

import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "オーズラボ株式会社のプライバシーポリシー。",
};

export default function JaPrivacyPolicyPage() {
  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          プライバシーポリシー
        </h1>
        <p className="mt-6 text-pretty text-base leading-8 text-neutral-800">
          本プライバシーポリシーは、オーズラボ株式会社（以下「当社」）が本ウェブサイトにおいて取得する
          個人情報の取扱いについて定めるものです。
        </p>
      </div>

      <Section title="個人情報の取得目的">
        <p>
          当社は、お問い合わせフォームを通じて取得した個人情報を、お問い合わせへの回答および当該回答に
          付随するメール連絡のためにのみ利用します。
        </p>
      </Section>

      <Section title="取得する情報の項目">
        <p>当社は、お問い合わせフォームを通じて、以下の情報を取得する場合があります。</p>
        <ul className="mt-6 list-disc space-y-2 pl-5">
          <li>お問い合わせ種別</li>
          <li>氏名</li>
          <li>メールアドレス</li>
          <li>所属（任意）</li>
          <li>お問い合わせ内容</li>
          <li>ページ言語（EN / JP）</li>
          <li>電話番号（任意）</li>
        </ul>
      </Section>

      <Section title="利用方法">
        <p>
          お問い合わせフォームを通じて取得した個人情報は、お問い合わせへの回答に必要な範囲でのメール
          連絡のみに利用します。
        </p>
      </Section>

      <Section title="保管および保存期間">
        <p>
          当社は、お問い合わせフォームにより送信された個人情報について、メール送信および回答に必要な
          範囲を超えて意図的に保存しません。なお、標準的なメール運用に付随して、結果として一定期間
          保管される場合があります。
        </p>
      </Section>

      <Section title="第三者提供">
        <p>
          当社は、法令等に基づく場合を除き、取得した個人情報を第三者に提供しません。
        </p>
      </Section>

      <Section title="安全管理措置">
        <p>
          当社は、個人情報への不正アクセス、改ざん、漏えい、滅失等を防止するため、合理的な技術的および
          組織的安全管理措置を講じます。
        </p>
      </Section>

      <Section title="本人の権利">
        <p>
          本人から、自己の個人情報の開示、訂正、削除等の請求があった場合、当社は、請求者本人であることを
          確認のうえ、合理的な範囲で適切に対応します。
        </p>
      </Section>

      <Section title="お問い合わせ窓口">
        <p>
          個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。
          <br />
          <span className="text-neutral-800">contact@oslab.co.jp</span>
        </p>
      </Section>

      <Section title="準拠法および管轄">
        <p>
          本プライバシーポリシーは日本法に準拠します。本プライバシーポリシーに関連して生じた紛争については、
          日本国内の裁判所を専属的合意管轄とします。
        </p>
      </Section>
    </div>
  );
}

