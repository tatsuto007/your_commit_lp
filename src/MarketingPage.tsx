import { Link } from 'react-router-dom';
import './styles/marketing.css';

const memberFeatures = [
  {
    title: '日報・週報・面談レポートを高速作成',
    description:
      '毎日の業務メモをもとに、日報・週報・1on1準備・面談レポートをAIが下書き。書く時間を削減し、内容の質を上げます。'
  },
  {
    title: '小さな成果も見逃さないAIフィードバック',
    description:
      '日々の報告内容から、AIが業務フィードバックをホーム画面に提示。進捗と成長を可視化し、モチベーションを維持します。'
  },
  {
    title: '成果と成長をメモリとして蓄積',
    description:
      '日々のレポートを時系列で構造化し、成果・挑戦・学びを継続的に記録。評価面談や1on1の準備時間の削減や、上司との認識ズレを防止します。'
  }
];

const managerFeatures = [
  {
    title: '部下レポートを一括で確認',
    description:
      'メンバーごとのレポートを集約し、AIが要点をサマリー。業務状況を短時間で把握し、確認漏れを防ぎます。'
  },
  {
    title: 'フィードバック案の作成を支援',
    description:
      'レポートと蓄積メモリをもとに、AIが具体的なフィードバック案を提示。1on1の質を安定化し、準備工数を削減します。'
  },
  {
    title: '評価の認識ズレを抑制',
    description:
      '成果の長期トラッキングにより、上司と部下の認識差を可視化。双方が納得しやすい評価コミュニケーションを実現します。'
  }
];

const flow = [
  { label: 'Report', text: '業務メモから日報・週報・面談レポートを自動下書き' },
  { label: 'Review', text: 'AIがチームの進捗を要約し、上司向け把握を高速化' },
  { label: 'Tracking', text: '成果メモリを蓄積し、評価の根拠を長期で可視化' }
];

export function MarketingPage() {
  return (
    <div className="marketing-page">
      <div className="marketing-backdrop" />

      <header className="marketing-header">
        <div className="marketing-brand">
          <span className="marketing-brand-mark" />
          Refine
        </div>
        <nav className="marketing-nav">
          <a href="#value">価値</a>
          <a href="#roles">機能</a>
          <a href="#security">セキュリティ</a>
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
            <h1>AIサポートで成果を見逃さない</h1>
            <p className="hero-description">
              日報・週報・面談レポート・1on1準備などの進捗や成果報告に関する業務をAIが支援。
              報告や成果の記録に時間をかけずにコア業務に集中。日々のレポートから成果と成長をメモリで記録し、
              上司と部下の認識ズレを減らします。
            </p>
            <div className="hero-tags">
              <span>業務報告をAIサポート</span>
              <span>成果・成長を自動で記録</span>
              <span>上司部下の認識ズレ防止</span>
            </div>
            <div className="hero-cta">
              <Link to="/" className="marketing-btn marketing-btn-solid">
                無料トライアル
              </Link>
              <a className="marketing-btn marketing-btn-ghost" href="#roles">
                機能を確認
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-glow" />
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
            <ul>
              <li>業務内容を箇条書きするだけで報告用フォーマットに自動変換</li>
              <li>成果・成長メモリの自動蓄積</li>
              <li>業務進捗に対する細やかなフィードバック</li>
              <li>上司向けサマリーでチームの状況をリアルタイムで確認</li>
            </ul>
          </div>
        </section>

        <section id="value" className="section-block">
          <div className="section-lead">
            <p className="section-eyebrow">Value</p>
            <h2>導入で得られる3つの価値</h2>
          </div>
          <div className="impact-grid">
            <article>
              <h3>報告工数を削減</h3>
              <p>日報・週報・面談資料の作成をAIがサポート。時間をかけずに質の高い業務報告が可能に。</p>
            </article>
            <article>
              <h3>チームの状況を瞬時に把握</h3>
              <p>チームからの業務報告をAIがリアルタイムでサマリーすることで状況を常に把握できます。</p>
            </article>
            <article>
              <h3>評価の納得感を向上</h3>
              <p>長期トラッキングで成果の根拠を共有し、上司と部下の認識差を最小化します。</p>
            </article>
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

        <section className="flow-section section-block">
          <div className="section-lead">
            <p className="section-eyebrow">Process</p>
            <h2>How It Works</h2>
          </div>
          <div className="flow-grid">
            {flow.map((item) => (
              <article key={item.label} className="flow-card">
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="security" className="security section-block">
          <div className="section-lead">
            <p className="section-eyebrow">Security</p>
            <h2>Google Cloudベースの安心運用</h2>
          </div>
          <p>
            Google Cloudインフラを前提に、認証・データ保護・可用性を担保しながら運用可能。
            企業運用に必要なスケーラビリティとセキュリティ水準に対応します。
          </p>
          <div className="security-points">
            <span>Google Cloud Infrastructure</span>
            <span>スケーラブルな運用</span>
            <span>安全なデータ管理</span>
          </div>
        </section>
      </main>
    </div>
  );
}
