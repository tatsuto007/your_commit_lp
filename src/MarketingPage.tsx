import { Link } from 'react-router-dom';
import './styles/marketing.css';

const heroImage = 'https://www.figma.com/api/mcp/asset/730c5237-abd3-4cbd-8b93-76156656c81c';
const valueReportImage = 'https://www.figma.com/api/mcp/asset/01de71d8-0353-4ee7-acb3-4e768802d88d';
const valueTeamImage = 'https://www.figma.com/api/mcp/asset/721a1808-fecb-460c-96a7-772eaafe8fdf';
const valueEvaluationImage = 'https://www.figma.com/api/mcp/asset/dbadc9d0-c642-4446-ba03-56b0dc1aee47';
const functionReportImage = 'https://www.figma.com/api/mcp/asset/2bbc174f-9576-430f-8c53-a8e9907a91d1';
const functionTrackingImage = 'https://www.figma.com/api/mcp/asset/f581cf84-bd9d-47c6-ac6e-a1fa12ef6520';
const settingImage = 'https://www.figma.com/api/mcp/asset/13bc6120-0f05-445c-9df0-6f9e2f6c7ed7';

const memberFeatures = [
  {
    title: '日報・週報・面談レポートを高速作成',
    description:
      '毎日の業務メモをもとに、日報・週報・1on1準備・面談レポートをAIがドラフト作成。書く時間を削減し、内容の質を上げます。'
  },
  {
    title: '小さな成果も見逃さないAIフィードバック',
    description:
      '日々の報告内容から、AIが業務フィードバックをホーム画面に提示。進捗と成長を可視化し、モチベーションを維持します。'
  },
  {
    title: '成果と成長をメモリとして蓄積',
    description:
      '日々のレポートを時系列で構造化し、成果・挑戦・学びを継続的に記録。評価面談や1on1の準備時間の削減や、成果の申告漏れによる上司との認識ズレを防止します。'
  }
];

const managerFeatures = [
  {
    title: 'チームメンバーのレポートを一括で確認',
    description:
      'メンバーごとのレポートを集約し、AIが要点をサマリー。業務状況を短時間で把握し、確認漏れを防ぎます。'
  },
  {
    title: 'フィードバック案の作成を支援',
    description:
      'レポートと蓄積メモリをもとに、AIが具体的なフィードバック案を提示。時間をかけずにメンバーへのフィードバックや1on1の質を向上させることができます。'
  },
  {
    title: '評価の認識ズレを抑制',
    description:
      '成果の長期トラッキング機能により、評価面談時の上司と部下の認識差を最小化。双方が納得しやすい評価コミュニケーションを実現します。'
  }
];

const heroTags = [
  '業務報告をAIサポート',
  '成果・成長を自動で記録',
  '目標達成意識の向上',
  '上司部下の認識ズレ防止',
  'AIフィードバック',
  '効果的な1on1'
];

const valueCards = [
  {
    title: '報告工数を削減',
    description: '日報・週報・面談資料の作成をAIがサポート。時間をかけずに質の高い業務報告が可能に。',
    image: valueReportImage
  },
  {
    title: 'チームの状況を瞬時に把握',
    description: 'チームからの業務報告をAIがリアルタイムでサマリーすることで状況を常に把握できます。',
    image: valueTeamImage
  },
  {
    title: '評価の納得感を向上',
    description: '長期トラッキングで成果の根拠を共有し、上司と部下の認識差を最小化します。',
    image: valueEvaluationImage
  }
];

const functionCards = [
  {
    label: 'Report',
    text: '業務メモから日報・週報・面談レポートを一瞬で作成',
    image: functionReportImage
  },
  {
    label: 'Review',
    text: 'AIがチームの進捗を要約し、上司向け把握を高速化'
  },
  {
    label: 'Tracking',
    text: '成果メモリを蓄積し、評価の根拠を長期で可視化',
    image: functionTrackingImage
  },
  {
    label: 'Setting',
    text: '会社の人事制度に合わせてレポートを作成したり、成果をトラッキングすることが可能です',
    image: settingImage,
    compact: true
  }
];

export function MarketingPage() {
  return (
    <div className="marketing-page">
      <div className="marketing-backdrop" />

      <header className="marketing-header">
        <div className="marketing-brand">
          <span className="marketing-brand-mark" />
          StellaPath
        </div>
        <nav className="marketing-nav">
          <a href="#value">導入価値</a>
          <a href="#roles">AIサポート</a>
          <a href="#function">機能詳細</a>
        </nav>
        <div className="marketing-actions">
          <Link to="/" className="marketing-btn marketing-btn-ghost">
            ログイン
          </Link>
          <Link to="/" className="marketing-btn marketing-btn-solid">
            お問い合わせ
          </Link>
        </div>
      </header>

      <main className="marketing-main">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-kicker">成果が積み上がる評価プラットフォーム</p>
            <h1>
              AIサポートで
              <br />
              成果を見逃さない
            </h1>
            <p className="hero-description">
              日報・週報・面談レポート・1on1準備
              <br />
              進捗や成果報告に関する業務をAIが支援します。
              <br />
              <br />
              報告や成果の記録に時間をかけずにコア業務に集中。
              <br />
              <br />
              日々のレポートから成果と成長をメモリで記録して
              <br />
              上司と部下の認識ズレを減らすことで納得の評価を実現します。
            </p>
            <div className="hero-tags">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="hero-cta">
              <Link to="/" className="marketing-btn marketing-btn-solid hero-primary-cta">
                無料トライアル
              </Link>
              <Link to="/" className="marketing-btn marketing-btn-ghost hero-secondary-cta">お問い合わせ</Link>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-glow" />
            <div className="hero-panel-inner">
              <div className="hero-panel-visual">
                <img src={heroImage} alt="Refineのダッシュボードイメージ" />
              </div>
              <h2>AIが目標達成と評価の納得感向上をサポート</h2>
              <div className="hero-panel-grid">
                <article>
                  <h3>今日のフィードバック</h3>
                  <p>「目標の数値達成おめでとうございます！初期から関わっていた努力が実りましたね。あなたの調整力には皆さん感謝していると思います！」</p>
                </article>
                <article>
                  <h3>上司向けサマリー</h3>
                  <p>「Aさんのプロジェクトは予定通り進捗しています。Bさんのレポートに不安があるため、さりげなく話を聞いてみてください。」</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="value" className="section-block">
          <div className="section-lead">
            <p className="section-eyebrow">Value</p>
            <h2>導入で得られる3つの価値</h2>
          </div>
          <div className="impact-grid">
            {valueCards.map((item) => (
              <article key={item.title}>
                <div className="impact-visual">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roles" className="role-section-block">
          <div className="section-lead">
            <p className="section-eyebrow">Features</p>
            <h2>役割に合わせたAIサポート</h2>
          </div>
          <div className="role-sections">
            <article className="role-card">
              <h2>部下・メンバー向け</h2>
              <ul>
                {memberFeatures.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </article>
            <article className="role-card">
              <h2>上司・マネージャー向け</h2>
              <ul>
                {managerFeatures.map((item) => (
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="function" className="function-section section-block">
          <div className="section-lead">
            <p className="section-eyebrow">Function</p>
            <h2>機能詳細・使い方</h2>
          </div>
          <div className="function-grid">
            {functionCards.map((item) => (
              <article key={item.label} className={`function-card${item.compact ? ' function-card-compact' : ''}`}>
                <span>{item.label}</span>
                <p>{item.text}</p>
                {item.image ? (
                  <div className="function-card-image">
                    <img src={item.image} alt="" />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="security" className="security-anchor" aria-hidden="true" />
      </main>
    </div>
  );
}
