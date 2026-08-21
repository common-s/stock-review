/**
 * 2026-08-14.js — A-share close review report (migrated to Trae dark design system).
 * Source: A股收盘复盘报告_2026-08-14.html (light theme).
 * Structure mirrors the reference report in js/data.js (2026-08-20).
 */
window.REPORTS["2026-08-14"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-14",
    subtitle: "创业板独领风骚 · 科创逆势独跌 · 缩量反弹暗藏隐忧",
    dateLabel: "2026-08-14"
  },
  sections: [
    {
      id: "sentiment",
      index: "01",
      title: "全市场情绪体温计（含持仓收益）",
      html: `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="ds-statcard">
            <span class="ds-statcard__label">个股涨跌幅中位数</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.21%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.27pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.57%</span>
            <span class="ds-statcard__delta">
              <span>0.00pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--status-success-default)">+0.36%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.27pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">📊 持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--status-success-default)">+0.31%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.10pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">超额收益（持仓−中位数）</span>
            <span class="ds-statcard__value" style="color:var(--status-success-default)">+0.52%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.17pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--status-warning-default);font-size:var(--heading-sm-font-size)">🧊 弱普跌</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--danger">超2900只个股下跌</span>
              <span class="ds-statcard__caption">下跌占比约54%</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📊 中位数 vs 沪深300 vs 持仓收益 — 前日(8/13)与今日(8/14)对比</h3>
          <div class="relative" style="height:240px;">
            <canvas id="divergenceChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📊 持仓收益分析</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            您今日持仓收益 <strong class="num" style="color:var(--status-success-default)">+0.31%</strong>，跑赢全市场中位数 <strong class="num" style="color:var(--status-error-default)">-0.21%</strong> 共 <strong class="num">0.52个百分点</strong>，连续两日实现正超额。同时跑赢沪深300（<strong class="num" style="color:var(--status-error-default)">-0.57%</strong>）<strong class="num">0.88个百分点</strong>。在创业板大涨1.12%的背景下，持仓收益虽未跑赢创业板，但显著优于全市场平均水平，防御能力持续体现。
          </p>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">⚠️ 核心信号</div>
            <div class="ds-alert__desc">
              今日中位数 <strong class="num" style="color:var(--status-error-default)">-0.21%</strong>，沪深300下跌 <strong class="num" style="color:var(--status-error-default)">-0.57%</strong>，剪刀差由负转正至 <strong class="num" style="color:var(--status-success-default)">+0.36%</strong>。个股表现略强于权重，亏钱效应较昨日（超4300只下跌）明显收窄。全市场超 <strong class="num">2900只</strong> 个股下跌（占比约 <strong class="num">54%</strong>），赚钱效应边际改善但仍偏弱。
            </div>
          </div>
        </div>
      `
    },
    {
      id: "style",
      index: "02",
      title: "风格强弱排名",
      html: `
        <div class="ds-card">
          <h3 class="ds-card__title">🥇 最强 vs 🥉 最弱 — 今日涨跌幅对比</h3>
          <div class="relative" style="height:260px;">
            <canvas id="styleChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">🔄 关键指数：前日(8/13) vs 今日(8/14) — “创业板反弹、科创独跌”</h3>
          <div class="relative" style="height:240px;">
            <canvas id="reversalChart"></canvas>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>排名</th>
                <th>指数</th>
                <th class="num">今日涨跌幅</th>
                <th class="num">前日涨跌幅(8/13)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥇 最强</span></td>
                <td><strong>创业板指</strong></td>
                <td class="num" style="color:var(--status-success-default)"><strong>+1.12%</strong></td>
                <td class="num" style="color:var(--status-error-default)">-0.45%</td>
                <td class="num" style="color:var(--status-success-default)">+1.57pp</td>
                <td class="num">约4,400亿(估算)</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥈 最强</span></td>
                <td><strong>中证1000</strong></td>
                <td class="num" style="color:var(--status-success-default)"><strong>+0.74%</strong></td>
                <td class="num" style="color:var(--status-error-default)">-1.00%</td>
                <td class="num" style="color:var(--status-success-default)">+1.74pp</td>
                <td class="num">4,108亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥉 最强</span></td>
                <td><strong>深证成指</strong></td>
                <td class="num" style="color:var(--status-success-default)"><strong>+0.45%</strong></td>
                <td class="num" style="color:var(--status-error-default)">-0.87%</td>
                <td class="num" style="color:var(--status-success-default)">+1.32pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥇 最弱</span></td>
                <td><strong>科创50</strong></td>
                <td class="num" style="color:var(--status-error-default)"><strong>-1.11%</strong></td>
                <td class="num" style="color:var(--status-error-default)">-1.11%</td>
                <td class="num">0.00pp</td>
                <td class="num">1,256亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥈 最弱</span></td>
                <td><strong>北证50</strong></td>
                <td class="num" style="color:var(--status-error-default)"><strong>-0.93%</strong></td>
                <td class="num" style="color:var(--status-error-default)">-1.62%</td>
                <td class="num" style="color:var(--status-success-default)">+0.69pp</td>
                <td class="num">84亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥉 最弱</span></td>
                <td><strong>上证指数</strong></td>
                <td class="num" style="color:var(--status-success-default)">+0.01%</td>
                <td class="num" style="color:var(--status-error-default)">-0.50%</td>
                <td class="num" style="color:var(--status-success-default)">+0.51pp</td>
                <td class="num">11,642亿</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📋 其他主要指数一览</h3>
          <div class="overflow-x-auto -mx-6 px-6">
            <table class="ds-table min-w-[560px]">
              <thead>
                <tr>
                  <th>指数</th>
                  <th class="num">今日涨跌幅</th>
                  <th class="num">收盘价/点位</th>
                  <th class="num">成交额</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>上证指数</td><td class="num" style="color:var(--status-success-default)"><strong>+0.01%</strong></td><td class="num">3,926.96</td><td class="num">11,642亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--status-success-default)"><strong>+0.45%</strong></td><td class="num">14,289.44</td><td class="num">—</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--status-error-default)"><strong>-0.57%</strong></td><td class="num">4,663.95</td><td class="num">6,907亿</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--status-error-default)"><strong>-1.11%</strong></td><td class="num">1,717.75</td><td class="num">1,256亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--status-success-default)"><strong>+1.12%</strong></td><td class="num">3,586.04</td><td class="num">约4,400亿(估算)</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--status-error-default)"><strong>-0.01%</strong></td><td class="num">7,967.42</td><td class="num">3,206亿</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--status-success-default)"><strong>+0.74%</strong></td><td class="num">7,773.36</td><td class="num">4,108亿</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--status-error-default)"><strong>-0.93%</strong></td><td class="num">1,087.54</td><td class="num">84亿</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="rocket" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">🚀 成长权重反弹，科创独跌</div>
            <div class="ds-alert__desc">
              今日市场呈现结构性修复——<strong>创业板指</strong>大涨 <strong class="num" style="color:var(--status-success-default)">+1.12%</strong> 领涨全场，<strong>中证1000</strong> 涨 <strong class="num" style="color:var(--status-success-default)">+0.74%</strong> 紧随其后。但<strong>科创50</strong>独跌 <strong class="num" style="color:var(--status-error-default)">-1.11%</strong>，与创业板指形成鲜明反差，反映资金在科技板块内部剧烈轮动（从半导体流向CPO/算力）。上证指数微涨 <strong class="num" style="color:var(--status-success-default)">+0.01%</strong>，几乎收平。北证50跌 <strong class="num" style="color:var(--status-error-default)">-0.93%</strong>，小微盘整体仍弱。
            </div>
          </div>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "03",
      title: "流动性异动警报",
      html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="ds-statcard" style="align-items:center;text-align:center;justify-content:center;">
            <span class="ds-statcard__label">沪深两市合计成交额</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default);font-size:30px;">2.14万亿</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>缩量约4,081亿(-15.9%)</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-card">
            <h3 class="ds-card__title">成交额对比</h3>
            <div class="relative" style="height:240px;">
              <canvas id="volumeChart"></canvas>
            </div>
          </div>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">⚠️ 异动解读</div>
            <div class="ds-alert__desc">
              成交额显著缩量，较前日减少约 <strong class="num">4,081亿</strong>（<strong class="num" style="color:var(--status-error-default)">-15.9%</strong>）。<strong>缩量 + 创业板大涨 + 超2900股下跌</strong>的组合，说明增量资金仍未入场，属存量资金调仓；资金集中流向创业板权重（宁德时代等），中小盘多数仍遭冷落。连续两日缩量（<strong class="num">2.57万亿→2.14万亿</strong>），若成交持续萎缩至 <strong class="num">2万亿</strong> 以下，市场短期反弹动能将严重不足。
            </div>
          </div>
        </div>
      `
    },
    {
      id: "interpretation",
      index: "04",
      title: "今日行情简要解读",
      html: `
        <div class="ds-card">
          <div class="ds-stack-16">
            <p class="text-[var(--text-default)] font-medium text-sm">创业板独领风骚，缩量反弹暗藏隐忧</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-success-default)"></i>
                <span><strong class="text-[var(--text-default)]">创业板强势反弹：</strong>创业板指大涨 <span class="ds-tag ds-tag--success">+1.12%</span> 领涨主要指数，CPO概念、算力租赁、液冷服务器等科技成长方向集体爆发，剑桥科技、金戈新材等多股涨停。宁德时代等创业板权重贡献主要涨幅。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-error-default)"></i>
                <span><strong class="text-[var(--text-default)]">科创50逆势独跌：</strong>科创50大跌 <span class="ds-tag ds-tag--danger">-1.11%</span>，华虹宏力跌近 <strong class="num" style="color:var(--status-error-default)">10%</strong>，中科飞测跌超 <strong class="num" style="color:var(--status-error-default)">5%</strong>，半导体产业链全面回落。同为科技板块，创业板与科创板走势严重背离，反映资金在科技内部从半导体向光通信/算力迁移。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-error-default)"></i>
                <span><strong class="text-[var(--text-default)]">高位股集体崩塌：</strong>京投发展上演“天地板”（4连板后以涨停开盘、跌停收盘），秦安股份、宝鹰股份等多股跌停。连板股晋级率跌至两成，短线情绪极度低迷。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="shuffle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向逆转：</strong>昨日剪刀差 <span class="ds-tag ds-tag--danger">-0.91%</span>（权重抗跌、小盘重挫），今日剪刀差 <span class="ds-tag ds-tag--success">+0.36%</span>（个股略强于权重），赚钱效应从“权重独强”向“个股修复”边际改善。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="pie-chart" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现稳健：</strong>您今日持仓收益 <span class="ds-tag ds-tag--success">+0.31%</span>，跑赢全市场中位数 <span class="ds-tag ds-tag--danger">-0.21%</span> 共 <strong class="num">0.52个百分点</strong>，连续两日实现正超额。在创业板大涨1.12%的背景下，持仓收益虽未跑赢创业板，但显著优于全市场平均水平。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-alert-default)"></i>
                <span><strong class="text-[var(--text-default)]">缩量信号需警惕：</strong>两市成交缩至 <strong class="num">2.14万亿</strong>，较前日缩量超 <strong class="num">4,000亿</strong>。缩量+创业板大涨的组合说明资金在存量内腾挪，而非增量入场。若成交持续萎缩，反弹持续性存疑。</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📈 主要指数今日涨跌幅一览</h3>
          <div class="relative" style="height:240px;">
            <canvas id="allIndexChart"></canvas>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "⚠️ 以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。持仓收益对比仅为客观展示，不构成操作建议。缩量背景下创业板大涨属存量资金调仓，追高需谨慎；高位股集体崩塌反映短线情绪极端脆弱。",
    generatedAt: "报告生成时间：2026-08-14"
  },
  charts: [
    // divergenceChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/13)", "今日 (8/14)"],
          datasets: [
            {
              label: "中位数涨跌幅",
              data: [-1.48, -0.21],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6, barPercentage: 0.25
            },
            {
              label: "沪深300涨跌幅",
              data: [-0.57, -0.57],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6, barPercentage: 0.25
            },
            {
              label: "持仓收益率",
              data: [0.21, 0.31],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6, barPercentage: 0.25
            }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return c.dataset.label + ": " + (c.parsed.y === null ? "无数据" : c.parsed.y.toFixed(2) + "%"); } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // styleChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["创业板指", "中证1000", "深证成指", "上证指数", "北证50", "科创50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.12, 0.74, 0.45, 0.01, -0.93, -1.11],
            backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
            borderRadius: 6, barPercentage: 0.6
          }]
        },
        options: {
          indexAxis: "y",
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return "涨跌幅: " + c.parsed.x.toFixed(2) + "%"; } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } }
          }
        }
      };
    },
    // reversalChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["创业板指", "中证1000", "科创50", "北证50", "沪深300"],
          datasets: [
            {
              label: "前日 (8/13)",
              data: [-0.45, -1.00, -1.11, -1.62, -0.57],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 5, barPercentage: 0.7
            },
            {
              label: "今日 (8/14)",
              data: [1.12, 0.74, -1.11, -0.93, -0.57],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 5, barPercentage: 0.7
            }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return c.dataset.label + ": " + (c.parsed.y === null ? "无数据" : c.parsed.y.toFixed(2) + "%"); } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // volumeChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/13)", "今日 (8/14)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.57, 2.14],
            backgroundColor: p.amber,
            borderRadius: 8, barPercentage: 0.5
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return "成交额: " + c.parsed.y + "万亿"; } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "万亿"; } }, grid: { color: p.gridColor }, beginAtZero: false, min: 2.0, max: 2.7 }
          }
        }
      };
    },
    // allIndexChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["创业板指", "中证1000", "深证成指", "上证指数", "中证500", "沪深300", "北证50", "科创50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.12, 0.74, 0.45, 0.01, -0.01, -0.57, -0.93, -1.11],
            backgroundColor: function (ctx) {
              var v = ctx.raw;
              if (v === null || v === undefined) return "rgba(149,153,166,0.3)";
              return v >= 0 ? p.green : p.red;
            },
            borderRadius: 5, barPercentage: 0.7
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return "涨跌幅: " + c.parsed.y.toFixed(2) + "%"; } })
          },
          scales: {
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } },
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 10 }, maxRotation: 45, minRotation: 35 }, grid: { display: false } }
          }
        }
      };
    }
  ]
};
