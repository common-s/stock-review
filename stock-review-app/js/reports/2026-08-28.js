/**
 * 2026-08-28 — A股收盘复盘报告
 * 冲高回落，双创暴跌，昨日最强即今日最弱
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-08-28"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-28",
    subtitle: "冲高回落，双创暴跌，昨日最强即今日最弱",
    dateLabel: "2026-08-28"
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
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.18%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.35pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.23%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-3.76pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300 加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.46%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.96pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.64%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.61pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓超额收益</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.41%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-3.41pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">冲高回落</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--warning">3013只上涨</span>
              <span class="ds-statcard__caption">上涨占比约55.8%</span>
            </span>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th class="num">今日（8/28）</th>
                <th class="num">前一日（8/27）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个股涨跌幅中位数</td>
                <td class="num" style="color:var(--stock-up)">+0.18%</td>
                <td class="num" style="color:var(--stock-up)">+0.53%</td>
                <td class="num" style="color:var(--stock-down)">-0.35pp</td>
              </tr>
              <tr>
                <td>加权指数（沪深300）</td>
                <td class="num" style="color:var(--stock-down)">-0.46%</td>
                <td class="num" style="color:var(--stock-up)">+0.50%</td>
                <td class="num" style="color:var(--stock-down)">-0.96pp</td>
              </tr>
              <tr>
                <td>指数失真剪刀差（中位数−加权）</td>
                <td class="num" style="color:var(--stock-up)">+0.64%</td>
                <td class="num" style="color:var(--stock-up)">+0.03%</td>
                <td class="num" style="color:var(--stock-up)">+0.61pp</td>
              </tr>
              <tr>
                <td>持仓收益率</td>
                <td class="num" style="color:var(--stock-down)">-1.23%</td>
                <td class="num" style="color:var(--stock-up)">+2.53%</td>
                <td class="num" style="color:var(--stock-down)">-3.76pp</td>
              </tr>
              <tr>
                <td>持仓收益 vs 中位数（超额）</td>
                <td class="num" style="color:var(--stock-down)">-1.41%</td>
                <td class="num" style="color:var(--stock-up)">+2.00%</td>
                <td class="num" style="color:var(--stock-down)">-3.41pp</td>
              </tr>
              <tr>
                <td>赚钱效应评级</td>
                <td>冲高回落，分化加剧</td>
                <td>强普涨</td>
                <td style="color:var(--stock-down)">赚钱效应显著转弱</td>
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
            今日市场冲高回落，三大指数全部翻绿。中位数<span class="num" style="color:var(--stock-up)">+0.18%</span>但沪深300跌<span class="num" style="color:var(--stock-down)">-0.46%</span>，剪刀差扩大至<span class="num" style="color:var(--stock-up)">+0.64%</span>，说明个股表现优于权重。您的持仓收益<span class="num" style="color:var(--stock-down)">-1.23%</span>，跑输全市场中位数1.41个百分点，超额收益由昨日<span class="num" style="color:var(--stock-up)">+2.00%</span>急转直下至<span class="num" style="color:var(--stock-down)">-1.41%</span>，单日波动达3.41个百分点，需重点关注持仓中是否集中于今日领跌的科创/创业板方向。
          </p>
        </div>
      `
    },
    { id: "profit", index: "02", title: "赚钱效应分析", html: `<div class="ds-profit__stack"><div class="ds-profit-rating"><div class="ds-profit-rating__icon-wrap">⚠️</div><div class="ds-profit-rating__body"><div class="ds-profit-rating__title">冲高回落，分化加剧</div><div class="ds-profit-rating__chips"><span class="ds-tag ds-tag--warning">分化加剧</span><span class="ds-tag ds-tag--success">💡 个股强 · 剪刀差 +0.64%</span></div><p class="ds-profit-rating__desc">全市场 <b>3,013</b> 只个股上涨 · <b>2,390</b> 只下跌 · <b>82</b> 家涨停 · 上涨占比约 <b>55.8%</b> · <span style="color:var(--stock-up)">失真：个股跑赢权重 +0.64%</span></p></div><div class="ds-profit-rating__figure"><div class="ds-profit-rating__figure-num" style="color:var(--stock-up)">55.8%</div><div class="ds-profit-rating__figure-label">上涨占比</div></div></div><div class="ds-card"><h3 class="ds-card__title">个股涨跌热力指标</h3><div class="ds-profit-heatgrid"><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="trending-up"></i>上涨个股数</div><div class="ds-heat-cell__val">3,013</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="trending-down"></i>下跌个股数</div><div class="ds-heat-cell__val">2,390</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="flame"></i>涨停家数</div><div class="ds-heat-cell__val">82</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="snowflake"></i>跌停家数</div><div class="ds-heat-cell__val">2</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="pie-chart"></i>上涨占比</div><div class="ds-heat-cell__val">55.8%</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="gauge"></i>个股中位数</div><div class="ds-heat-cell__val">+0.18%</div><div class="ds-heat-cell__sub">全市场个股涨跌幅中位数</div></div></div></div><div class="ds-card"><h3 class="ds-card__title">个股 vs 权重（失真度对比）</h3><div class="ds-profit-distortion"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">个 股</div><div class="ds-statcard"><span class="ds-statcard__label">个股涨跌幅中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.18%</span></div></div><div class="ds-profit-distortion__scissor"><div class="lbl">指数失真剪刀差</div><div class="big" style="color:var(--stock-up)">+0.64%</div><span class="ds-tag ds-tag--success">个股强</span><div class="lbl" style="margin-top:8px;letter-spacing:0.02em;text-transform:none">个股跑赢权重，失真度扩大</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">权 重</div><div class="ds-statcard"><span class="ds-statcard__label">沪深300 加权指数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-0.46%</span></div></div></div></div><div class="ds-card"><h3 class="ds-card__title">持仓 vs 市场（超额收益对比）</h3><div class="ds-profit-holding"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">持 仓</div><div class="ds-statcard"><span class="ds-statcard__label">持仓收益率</span><span class="ds-statcard__value" style="color:var(--stock-down)">-1.23%</span></div></div><div class="ds-profit-holding__excess"><div class="lbl">超 额 收 益</div><div class="num" style="color:var(--stock-down)">-1.41%</div><span class="ds-tag ds-tag--danger">跑输市场</span><div class="ds-heat-cell__sub" style="text-align:center">跑输市场（超额收益为负，持仓集中于今日领跌方向）</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">市 场</div><div class="ds-statcard"><span class="ds-statcard__label">全市场中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.18%</span></div></div></div><div class="ds-profit-holding__advice is-down">💡 超额收益由昨日 +2.00% 急转直下至 -1.41%，单日波动达 3.41pp，建议关注持仓是否集中于今日领跌的科创/创业板方向。</div></div></div>` },
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
                <th class="num">前日涨跌幅（8/27）</th>
                <th class="num">环比（今日-前日）</th>
                <th class="num">今日收盘价</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>上证指数</td>
                <td class="num" style="color:var(--stock-down)">-0.11%</td>
                <td class="num" style="color:var(--stock-up)">+1.13%</td>
                <td class="num" style="color:var(--stock-down)">-1.24pp</td>
                <td class="num">3,952.18</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>沪深300</td>
                <td class="num" style="color:var(--stock-down)">-0.46%</td>
                <td class="num" style="color:var(--stock-up)">+0.50%</td>
                <td class="num" style="color:var(--stock-down)">-0.96pp</td>
                <td class="num">4,609.18</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>深证成指</td>
                <td class="num" style="color:var(--stock-down)">-0.68%</td>
                <td class="num" style="color:var(--stock-up)">+1.50%</td>
                <td class="num" style="color:var(--stock-down)">-2.18pp</td>
                <td class="num">13,953.07</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-down)">-1.85%</td>
                <td class="num" style="color:var(--stock-up)">+3.77%</td>
                <td class="num" style="color:var(--stock-down)">-5.62pp</td>
                <td class="num">1,662.15</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-down)">-1.41%</td>
                <td class="num" style="color:var(--stock-up)">+1.71%</td>
                <td class="num" style="color:var(--stock-down)">-3.12pp</td>
                <td class="num">3,424.40</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>北证50</td>
                <td class="num">—</td>
                <td class="num" style="color:var(--stock-up)">+0.65%</td>
                <td class="num">—</td>
                <td class="num">—</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-down)">-0.11%</td><td class="num">3,952.18</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-down)">-0.68%</td><td class="num">13,953.07</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-down)">-0.46%</td><td class="num">4,609.18</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-down)">-1.85%</td><td class="num">1,662.15</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-down)">-1.41%</td><td class="num">3,424.40</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            昨日领涨的科创50（<span class="num" style="color:var(--stock-up)">+3.77%</span>）今日暴跌<span class="num" style="color:var(--stock-down)">1.85%</span>，创业板指（<span class="num" style="color:var(--stock-up)">+1.71%</span>）今日大跌<span class="num" style="color:var(--stock-down)">1.41%</span>，"昨日最强即今日最弱"的A股魔咒再度上演。大盘权重（上证<span class="num" style="color:var(--stock-down)">-0.11%</span>、沪深300<span class="num" style="color:var(--stock-down)">-0.46%</span>）相对抗跌，双创板块成为重灾区。市场呈现典型的获利回吐、高低切换格局。
          </p>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "04",
      title: "流动性异动警报",
      html: `
        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">成交额缩量 冲高回落</div>
            <div class="ds-alert__desc">沪深两市合计约 2.02万亿，较前日缩量约 1,200亿（-5.6%），连续第2个交易日突破2万亿</div>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th>今日（8/28）</th>
                <th class="num">前一日（8/27）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>沪深两市合计成交额</td>
                <td>约2.02万亿</td>
                <td class="num">2.14万亿</td>
                <td class="num" style="color:var(--status-warning-default)">缩量约1,200亿（-5.6%）</td>
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
            成交额连续第2个交易日突破2万亿，但较前日缩量约1,200亿。缩量+冲高回落+双创领跌的组合，说明昨日追涨科创/创业板的资金今日被套，获利盘集中出逃；增量资金未持续入场，存量博弈特征依旧；若成交持续萎缩至2万亿以下，短期调整压力将进一步加大。
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
            <p class="text-[var(--text-default)] font-medium text-sm">"冲高回落，双创暴跌，昨日最强即今日最弱"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">三大指数全线翻绿：</strong>沪指跌0.11%报3952.18点，深成指跌0.68%报13953.07点，创业板指跌1.41%报3424.40点。指数冲高回落，盘中一度集体翻红，尾盘全线走弱。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">双创板块成重灾区：</strong>科创50暴跌1.85%，创业板指大跌1.41%。昨日领涨的半导体、算力硬件今日大幅回调，医药板块同步走弱。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="repeat" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">风格一日游特征明显：</strong>昨日科创50暴涨3.77%领涨全场，今日暴跌1.85%领跌全场。"昨日最强即今日最弱"的短期反转效应极为强烈，追涨杀跌风险巨大。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向：</strong>今日剪刀差为+0.64%（中位数+0.18%，沪深300-0.46%），说明个股表现优于权重。虽然指数全线下跌，但中位数仍为正，市场并非全面崩溃。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现大幅回落：</strong>您今日持仓收益-1.23%，跑输全市场中位数1.41个百分点。昨日持仓收益+2.53%跑赢中位数2.00个百分点，今日即大幅逆转，推测持仓高度集中于昨日领涨、今日领跌的科创50/半导体/算力硬件方向，波动极为剧烈。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-alert-default)"></i>
                <span><strong class="text-[var(--text-default)]">缩量回调需警惕：</strong>两市成交缩至约2.02万亿，连续两日维持2万亿以上但呈缩量趋势。缩量+冲高回落说明短期获利盘尚未出清，需关注下周初是否出现缩量企稳信号。</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。双创板块波动剧烈，风格一日游特征明显，追高需极度谨慎。建议关注持仓集中度与波动控制。",
    generatedAt: "报告生成时间：2026-08-28"
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
              label: "今日（8/28）",
              data: [0.18, -0.46, -1.23, 0.64],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            },
            {
              label: "前一日（8/27）",
              data: [0.53, 0.50, 2.53, 0.03],
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
          labels: ["上证指数", "沪深300", "深证成指", "创业板指", "科创50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [-0.11, -0.46, -0.68, -1.41, -1.85],
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
          labels: ["8/27", "8/28"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.14, 2.02],
            backgroundColor: p.amber,
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
