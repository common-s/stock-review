/**
 * 2026-08-31 — A股收盘复盘报告
 * 低开高走，八月红盘收官，传媒板块掀涨停潮
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-08-31"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-31",
    subtitle: "低开高走，八月红盘收官，传媒板块掀涨停潮",
    dateLabel: "2026-08-31"
  },
  sections: [
    {
      id: "sentiment",
      index: "01",
      title: "全市场情绪体温计",
      html: `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="ds-statcard">
            <span class="ds-statcard__label">个股涨跌幅中位数</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.44%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.26pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.19%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+2.42pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300 加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.81%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.35pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.25%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.61pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓超额收益</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.75%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+2.16pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">🔥 强普涨</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--success">3181只上涨</span>
              <span class="ds-statcard__caption">上涨占比约58.9%</span>
            </span>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th class="num">今日（8/31）</th>
                <th class="num">前一日（8/28）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个股涨跌幅中位数</td>
                <td class="num" style="color:var(--stock-up)">+0.44%</td>
                <td class="num" style="color:var(--stock-up)">+0.18%</td>
                <td class="num" style="color:var(--stock-up)">+0.26pp</td>
              </tr>
              <tr>
                <td>加权指数（沪深300）</td>
                <td class="num" style="color:var(--stock-down)">-0.81%</td>
                <td class="num" style="color:var(--stock-down)">-0.46%</td>
                <td class="num" style="color:var(--stock-down)">-0.35pp</td>
              </tr>
              <tr>
                <td>指数失真剪刀差（中位数−加权）</td>
                <td class="num" style="color:var(--stock-up)">+1.25%</td>
                <td class="num" style="color:var(--stock-up)">+0.64%</td>
                <td class="num" style="color:var(--stock-up)">+0.61pp</td>
              </tr>
              <tr>
                <td>持仓收益率</td>
                <td class="num" style="color:var(--stock-up)">+1.19%</td>
                <td class="num" style="color:var(--stock-down)">-1.23%</td>
                <td class="num" style="color:var(--stock-up)">+2.42pp</td>
              </tr>
              <tr>
                <td>持仓收益 vs 中位数（超额）</td>
                <td class="num" style="color:var(--stock-up)">+0.75%</td>
                <td class="num" style="color:var(--stock-down)">-1.41%</td>
                <td class="num" style="color:var(--stock-up)">+2.16pp</td>
              </tr>
              <tr>
                <td>赚钱效应评级</td>
                <td>强普涨（超3100只个股上涨）</td>
                <td>冲高回落</td>
                <td style="color:var(--stock-up)">赚钱效应显著回暖</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">核心指标今日 vs 前一日对比</h3>
          <div class="relative" style="height:240px;">
            <canvas id="sentimentChart" style="height: 240px; width: 100%;"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            今日三大指数低开高走，午后悉数翻红。中位数<span class="num" style="color:var(--stock-up)">+0.44%</span>，但沪深300跌<span class="num" style="color:var(--stock-down)">-0.81%</span>，剪刀差扩大至<span class="num" style="color:var(--stock-up)">+1.25%</span>，说明中小盘个股显著跑赢权重，属典型的"赚个股不赚指数"行情。您的持仓收益<span class="num" style="color:var(--stock-up)">+1.19%</span>，跑赢全市场中位数0.75个百分点，较昨日<span class="num" style="color:var(--stock-down)">-1.23%</span>大幅修复2.42个百分点，超额收益由负转正，持仓结构明显改善。
          </p>
        </div>
      `
    },
    { id: "profit", index: "02", title: "赚钱效应分析", html: `<div class="ds-profit__stack"><div class="ds-profit-rating"><div class="ds-profit-rating__icon-wrap">🔥</div><div class="ds-profit-rating__body"><div class="ds-profit-rating__title">🔥 强普涨</div><div class="ds-profit-rating__chips"><span class="ds-tag ds-tag--success">强势普涨</span><span class="ds-tag ds-tag--success">💡 个股强 · 剪刀差 +1.25%</span></div><p class="ds-profit-rating__desc">全市场 <b>3,181</b> 只个股上涨 · <b>2,218</b> 只下跌 · <b>89</b> 家涨停 · 上涨占比约 <b>58.9%</b> · <span style="color:var(--stock-up)">失真：个股跑赢权重 +1.25%</span></p></div><div class="ds-profit-rating__figure"><div class="ds-profit-rating__figure-num" style="color:var(--stock-up)">58.9%</div><div class="ds-profit-rating__figure-label">上涨占比</div></div></div><div class="ds-card"><h3 class="ds-card__title">个股涨跌热力指标</h3><div class="ds-profit-heatgrid"><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="trending-up"></i>上涨个股数</div><div class="ds-heat-cell__val">3,181</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="trending-down"></i>下跌个股数</div><div class="ds-heat-cell__val">2,218</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="flame"></i>涨停家数</div><div class="ds-heat-cell__val">89</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="snowflake"></i>跌停家数</div><div class="ds-heat-cell__val">13</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="pie-chart"></i>上涨占比</div><div class="ds-heat-cell__val">58.9%</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="gauge"></i>个股中位数</div><div class="ds-heat-cell__val">+0.44%</div><div class="ds-heat-cell__sub">全市场个股涨跌幅中位数</div></div></div></div><div class="ds-card"><h3 class="ds-card__title">个股 vs 权重（失真度对比）</h3><div class="ds-profit-distortion"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">个 股</div><div class="ds-statcard"><span class="ds-statcard__label">个股涨跌幅中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.44%</span></div></div><div class="ds-profit-distortion__scissor"><div class="lbl">指数失真剪刀差</div><div class="big" style="color:var(--stock-up)">+1.25%</div><span class="ds-tag ds-tag--success">个股强</span><div class="lbl" style="margin-top:8px;letter-spacing:0.02em;text-transform:none">个股跑赢权重，失真度扩大</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">权 重</div><div class="ds-statcard"><span class="ds-statcard__label">沪深300 加权指数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-0.81%</span></div></div></div></div><div class="ds-card"><h3 class="ds-card__title">持仓 vs 市场（超额收益对比）</h3><div class="ds-profit-holding"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">持 仓</div><div class="ds-statcard"><span class="ds-statcard__label">持仓收益率</span><span class="ds-statcard__value" style="color:var(--stock-up)">+1.19%</span></div></div><div class="ds-profit-holding__excess"><div class="lbl">超 额 收 益</div><div class="num" style="color:var(--stock-up)">+0.75%</div><span class="ds-tag ds-tag--success">跑赢市场</span><div class="ds-heat-cell__sub" style="text-align:center">跑赢市场（超额收益为正，持仓结构改善）</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">市 场</div><div class="ds-statcard"><span class="ds-statcard__label">全市场中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.44%</span></div></div></div><div class="ds-profit-holding__advice is-up">💡 超额收益由昨日 -1.41% 大幅修复至 +0.75%，单日波动达 2.16pp，持仓结构明显改善，超额收益由负转正。</div></div></div>` },
    {
      id: "style",
      index: "03",
      title: "风格强弱排名",
      html: `
        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>排名</th>
                <th>指数</th>
                <th class="num">今日涨跌幅</th>
                <th class="num">前日涨跌幅（8/28）</th>
                <th class="num">环比（今日-前日）</th>
                <th class="num">今日收盘价</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>上证指数</td>
                <td class="num" style="color:var(--stock-up)">+0.86%</td>
                <td class="num" style="color:var(--stock-down)">-0.11%</td>
                <td class="num" style="color:var(--stock-up)">+0.97pp</td>
                <td class="num">3,986.30</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>深证成指</td>
                <td class="num" style="color:var(--stock-up)">+0.44%</td>
                <td class="num" style="color:var(--stock-down)">-0.68%</td>
                <td class="num" style="color:var(--stock-up)">+1.12pp</td>
                <td class="num">14,015.00</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-up)">+0.42%</td>
                <td class="num" style="color:var(--stock-down)">-1.41%</td>
                <td class="num" style="color:var(--stock-up)">+1.83pp</td>
                <td class="num">3,438.68</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-down)">-1.61%</td>
                <td class="num" style="color:var(--stock-down)">-1.85%</td>
                <td class="num" style="color:var(--stock-up)">+0.24pp</td>
                <td class="num">1,635.39（盘中）</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>沪深300</td>
                <td class="num" style="color:var(--stock-down)">-0.81%</td>
                <td class="num" style="color:var(--stock-down)">-0.46%</td>
                <td class="num" style="color:var(--stock-down)">-0.35pp</td>
                <td class="num">4,572.06</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--stock-up)">+0.14%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">1,065.29</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">主要宽基指数涨跌幅对比</h3>
          <div class="relative" style="height:260px;">
            <canvas id="styleChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">其他主要指数一览</h3>
          <div class="overflow-x-auto -mx-6 px-6">
            <table class="ds-table min-w-[480px]">
              <thead>
                <tr>
                  <th>指数</th>
                  <th class="num">今日涨跌幅</th>
                  <th class="num">收盘价/点位</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-up)">+0.86%</td><td class="num">3,986.30</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-up)">+0.44%</td><td class="num">14,015.00</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)">+0.42%</td><td class="num">3,438.68</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-down)">-0.81%</td><td class="num">4,572.06</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-down)">-1.61%</td><td class="num">1,635.39</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-up)">+0.14%</td><td class="num">1,065.29</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            大盘权重（上证<span class="num" style="color:var(--stock-up)">+0.86%</span>）领涨，双创板块表现偏弱。上证指数低开高走涨0.86%，但科创50仍跌<span class="num" style="color:var(--stock-down)">1.61%</span>，"昨日最弱即今日最强"特征在创业板指（昨日<span class="num" style="color:var(--stock-down)">-1.41%</span>→今日<span class="num" style="color:var(--stock-up)">+0.42%</span>）上再度上演。
          </p>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "04",
      title: "流动性异动警报",
      html: `
        <div class="ds-alert ds-alert--success">
          <div class="ds-alert__icon">
            <i data-lucide="trending-up" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">成交额放量 普涨格局</div>
            <div class="ds-alert__desc">沪深两市合计约 2.1万亿，较前日放量约 1,200亿（+5.9%），连续第3个交易日突破2万亿</div>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th>今日（8/31）</th>
                <th class="num">前一日（8/28）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>沪深两市合计成交额</td>
                <td>约2.1万亿（三市2.1453万亿）</td>
                <td class="num">约2.02万亿</td>
                <td class="num" style="color:var(--stock-up)">放量约1,200亿（+5.9%）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">沪深两市成交额对比（万亿）</h3>
          <div class="relative" style="height:220px;">
            <canvas id="liquidityChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">异动解读</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            成交额连续第3个交易日突破2万亿，较上日放量约276亿元。放量+普涨+超3100股上涨的组合，说明增量资金温和入场，交投活跃度提升；资金集中流向传媒/煤炭/银行等权重板块，科创板块继续承压；若成交能持续维持在2万亿以上，市场短期反弹动能有望延续。
          </p>
        </div>
      `
    },
    {
      id: "interpretation",
      index: "05",
      title: "今日行情简要解读",
      html: `
        <div class="ds-card">
          <div class="ds-stack-16">
            <p class="text-[var(--text-default)] font-medium text-sm">"低开高走，八月红盘收官，传媒板块掀涨停潮"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">三大指数低开高走：</strong>A股四大指数集体低开，沪指一度跌0.65%，随后逐步回升，午后悉数翻红。上证指数涨0.86%报3986.30点，深证成指涨0.44%，创业板指涨0.42%。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="flame" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">传媒板块全面爆发：</strong>国内首部上星播出的AI长剧《后西游记》点燃短剧概念，荣信文化、芒果超媒、中广天择等多股涨停。传媒板块大涨3.82%领涨申万行业。AI视频、影视院线、液冷服务器、煤炭等板块涨幅居前。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="landmark" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">银行股再创新高：</strong>中国银行、中信银行盘中再创新高，银行板块全天表现积极。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">贵金属承压下跌：</strong>沃什杰克逊霍尔"首秀"放鹰，国际金价承压，贵金属、光伏设备、创新药等板块跌幅居前。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向：</strong>今日剪刀差为+1.25%（中位数+0.44%，沪深300-0.81%），说明中小盘个股显著跑赢权重，市场呈现"个股强于指数"的赚钱效应格局。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现显著改善：</strong>您今日持仓收益+1.19%，跑赢全市场中位数0.75个百分点，较昨日-1.23%大幅修复2.42个百分点。在传媒/煤炭/银行领涨的背景下，持仓收益接近上证指数（+0.86%）水平，说明持仓结构与今日市场最强方向部分契合。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="activity" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-success-default)"></i>
                <span><strong class="text-[var(--text-default)]">放量信号积极：</strong>两市成交连续第三日突破2万亿，放量+普涨属良性上涨格局，关注后续能否持续维持在2万亿以上。</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。科创50连续两日表现偏弱，关注科技板块是否会迎来反弹窗口。",
    generatedAt: "报告生成时间：2026-08-31"
  },
  charts: [
    // sentimentChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["个股涨跌幅中位数", "沪深300加权指数", "持仓收益率", "剪刀差"],
          datasets: [
            {
              label: "今日（8/31）",
              data: [0.44, -0.81, 1.19, 1.25],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            },
            {
              label: "前一日（8/28）",
              data: [0.18, -0.46, -1.23, 0.64],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            }
          ]
        },
        options: p.commonOptions()
      };
    },
    // styleChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["上证指数", "深证成指", "创业板指", "北证50", "沪深300", "科创50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [0.86, 0.44, 0.42, 0.14, -0.81, -1.61],
            backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
            borderRadius: 4, barPercentage: 0.6, categoryPercentage: 0.7
          }]
        },
        options: {
          indexAxis: "y",
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return c.parsed.x >= 0 ? "+" + c.parsed.x + "%" : c.parsed.x + "%"; } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } }
          }
        }
      };
    },
    // liquidityChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["8/28", "8/31"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.02, 2.10],
            backgroundColor: p.green,
            borderRadius: 4, barPercentage: 0.5, categoryPercentage: 0.6
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return c.parsed.y + " 万亿"; } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + " 万亿"; } }, grid: { color: p.gridColor }, beginAtZero: true }
          }
        }
      };
    }
  ]
};
