/**
 * 2026-08-18.js — A股收盘复盘报告（2026-08-18）。
 * 由旧版浅色 HTML 报告迁移至 Trae 深色设计系统数据格式。
 * 结构：window.REPORTS["2026-08-18"] = { header, sections, footer, charts }。
 */
window.REPORTS["2026-08-18"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-18",
    subtitle: "科创独涨 · 小盘领跌 · 普涨后正常分化整理",
    dateLabel: "2026-08-18"
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
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.48%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.82pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.08%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-2.71pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value">待计算</span>
            <span class="ds-statcard__delta">
              <span>—</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value">待核实</span>
            <span class="ds-statcard__delta">
              <span>—</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">超额收益（持仓−中位数）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.56%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.89pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="font-size:var(--heading-sm-font-size)">弱普跌</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--danger">多数个股下跌</span>
              <span class="ds-statcard__caption">较昨日强普涨明显转弱</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">中位数 vs 持仓收益 — 前日(8/17)与今日(8/18)对比（沪深300待核实）</h3>
          <div class="relative" style="height:240px;">
            <canvas id="divergenceChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">持仓收益分析</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            您今日持仓收益 <span class="num" style="color:var(--stock-up)">+0.08%</span>，跑赢全市场中位数 <span class="num" style="color:var(--stock-down)">-0.48%</span> 共 <strong>0.56个百分点</strong>，连续三日实现正超额收益。在多数个股下跌、中证1000跌近1%的背景下，持仓仍能维持正收益，说明持仓结构偏向了今日相对强势的科创/成长方向。持仓防御能力持续体现。
          </p>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">核心信号</div>
            <div class="ds-alert__desc">今日中位数 <span class="num" style="color:var(--stock-down)">-0.48%</span>，全市场多数个股下跌，赚钱效应较昨日的强普涨（<span class="num" style="color:var(--stock-up)">+1.34%</span>）明显转弱。沪深300数据待核实。您的持仓收益 <span class="num" style="color:var(--stock-up)">+0.08%</span>，跑赢中位数 <strong>0.56个百分点</strong>，超额收益连续三日为正。</div>
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
          <h3 class="ds-card__title">最强 vs 最弱 — 今日涨跌幅对比</h3>
          <div class="relative" style="height:260px;">
            <canvas id="styleChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">关键指数：前日(8/17) vs 今日(8/18) — “大涨后分化整理”</h3>
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
                <th class="num">前日涨跌幅(8/17)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-up)">+0.70%</td>
                <td class="num" style="color:var(--stock-up)">+3.04%</td>
                <td class="num" style="color:var(--stock-down)">-2.34pp</td>
                <td class="num">1,718亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-up)">+0.02%</td>
                <td class="num" style="color:var(--stock-up)">+2.80%</td>
                <td class="num" style="color:var(--stock-down)">-2.78pp</td>
                <td class="num">5,580亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>深证成指</td>
                <td class="num" style="color:var(--stock-down)">-0.20%</td>
                <td class="num" style="color:var(--stock-up)">+2.19%</td>
                <td class="num" style="color:var(--stock-down)">-2.39pp</td>
                <td class="num">9,831亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>中证1000</td>
                <td class="num" style="color:var(--stock-down)">-0.85%</td>
                <td class="num" style="color:var(--stock-up)">+1.52%</td>
                <td class="num" style="color:var(--stock-down)">-2.37pp</td>
                <td class="num">4,820亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>中证500</td>
                <td class="num" style="color:var(--stock-down)">-0.63%</td>
                <td class="num" style="color:var(--stock-up)">+1.61%</td>
                <td class="num" style="color:var(--stock-down)">-2.24pp</td>
                <td class="num">4,245亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>上证指数</td>
                <td class="num" style="color:var(--stock-down)">-0.19%</td>
                <td class="num" style="color:var(--stock-up)">+1.24%</td>
                <td class="num" style="color:var(--stock-down)">-1.43pp</td>
                <td class="num">9,039亿</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">其他主要指数一览</h3>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-down)">-0.19%</td><td class="num">3,968.05</td><td class="num">9,039亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-down)">-0.20%</td><td class="num">14,640.32</td><td class="num">9,831亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)">+0.02%</td><td class="num">3,728.50</td><td class="num">5,580亿</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-up)">+0.70%</td><td class="num">1,781.96</td><td class="num">1,718亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-down)">-0.63%</td><td class="num">8,068.14</td><td class="num">4,245亿</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-down)">-0.85%</td><td class="num">7,820.82</td><td class="num">4,820亿</td></tr>
                <tr><td>沪深300</td><td class="num">待核实</td><td class="num">待核实</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">成长抗跌，小盘领跌</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            <strong class="text-[var(--text-default)]">科创50</strong>（<span class="num" style="color:var(--stock-up)">+0.70%</span>）逆势领涨，延续昨日暴涨3%的强势；<strong class="text-[var(--text-default)]">创业板指</strong>微涨 <span class="num" style="color:var(--stock-up)">+0.02%</span> 勉强收红。<strong class="text-[var(--text-default)]">中证1000</strong>（<span class="num" style="color:var(--stock-down)">-0.85%</span>）和<strong class="text-[var(--text-default)]">中证500</strong>（<span class="num" style="color:var(--stock-down)">-0.63%</span>）跌幅居前，中小盘股整体承压明显。市场呈现“成长抗跌、小盘领跌”格局，属昨日大涨后的正常分化整理。
          </p>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "03",
      title: "流动性异动警报",
      html: `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深两市合计成交额</span>
            <span class="ds-statcard__value">约2.25万亿</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>缩量约1,200~1,500亿</span>
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
            <div class="ds-alert__title">异动解读</div>
            <div class="ds-alert__desc">成交额较昨日小幅缩量约 <strong>1,200~1,500亿</strong>，但仍维持在 <strong>2.2万亿</strong> 以上。<strong>缩量 + 多数个股下跌</strong>的组合，说明市场情绪趋于谨慎，追高意愿减弱；资金从中小盘（中证1000/500）流出，部分流入科创/创业板；属连续两日大涨后的正常获利回吐与分化整理，暂未出现恐慌性抛售迹象。</div>
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
            <p class="text-[var(--text-default)] font-medium text-sm">“科创独涨，小盘领跌，普涨后正常分化”</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">科创50逆势独涨：</strong>科创50（<span class="num" style="color:var(--stock-up)">+0.70%</span>）成为今日唯一显著上涨的主要指数，延续昨日暴涨3%的强势。两日累计涨幅超 <strong>3.7%</strong>，短期获利回吐压力需关注。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">创业板微幅收红：</strong>创业板指微涨 <span class="num" style="color:var(--stock-up)">+0.02%</span>，勉强收红，较昨日 <strong>+2.80%</strong> 大幅回落。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">中小盘明显承压：</strong>中证1000（<span class="num" style="color:var(--stock-down)">-0.85%</span>）和中证500（<span class="num" style="color:var(--stock-down)">-0.63%</span>）跌幅居前，中小盘股整体表现弱于大盘。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">主板小幅回调：</strong>上证指数跌 <span class="num" style="color:var(--stock-down)">-0.19%</span>，深证成指跌 <span class="num" style="color:var(--stock-down)">-0.20%</span>，属昨日大涨后的正常整理。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="pie-chart" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现稳健：</strong>您今日持仓收益 <span class="num" style="color:var(--stock-up)">+0.08%</span>，跑赢全市场中位数 <span class="num" style="color:var(--stock-down)">-0.48%</span> 共 <strong>0.56个百分点</strong>，连续三日实现正超额。在多数个股下跌的背景下，持仓仍能维持正收益，说明持仓结构偏向了今日相对强势的科创/成长方向。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">缩量整理信号：</strong>两市成交小幅缩量至约 <strong>2.25万亿</strong>，属于大涨后的正常获利回吐与分化整理，暂未出现恐慌性抛售迹象。</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">主要指数今日涨跌幅一览</h3>
          <div class="relative" style="height:240px;">
            <canvas id="allIndexChart"></canvas>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。持仓收益对比仅为客观展示，不构成操作建议。科创50短期累计涨幅较大（两日合计超3.7%），需警惕获利回吐压力。沪深300数据待核实。",
    generatedAt: "报告生成时间：2026-08-18"
  },
  charts: [
    // 1. divergenceChart — 中位数 vs 持仓收益（前日 vs 今日）
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/17)", "今日 (8/18)"],
          datasets: [
            {
              label: "中位数涨跌幅",
              data: [1.34, -0.48],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6,
              barPercentage: 0.3
            },
            {
              label: "持仓收益率",
              data: [2.79, 0.08],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6,
              barPercentage: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              displayColors: false,
              valueFmt: function (c) { return c.dataset.label + ": " + (c.parsed.y == null ? "无数据" : c.parsed.y.toFixed(2) + "%"); }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // 2. styleChart — 最强 vs 最弱（横向条形图）
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证成指", "上证指数", "中证500", "中证1000"],
          datasets: [{
            label: "今日涨跌幅",
            data: [0.70, 0.02, -0.20, -0.19, -0.63, -0.85],
            backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
            borderRadius: 6,
            barPercentage: 0.6
          }]
        },
        options: {
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({
              displayColors: false,
              valueFmt: function (c) { return "涨跌幅: " + c.parsed.x.toFixed(2) + "%"; }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } }
          }
        }
      };
    },
    // 3. reversalChart — 关键指数：前日 vs 今日
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证成指", "上证指数", "中证500", "中证1000"],
          datasets: [
            {
              label: "前日 (8/17)",
              data: [3.04, 2.80, 2.19, 1.24, 1.61, 1.52],
              backgroundColor: function (ctx) { return ctx.raw == null ? "rgba(149,153,166,0.3)" : (ctx.raw >= 0 ? p.green : p.red); },
              borderRadius: 5,
              barPercentage: 0.7
            },
            {
              label: "今日 (8/18)",
              data: [0.70, 0.02, -0.20, -0.19, -0.63, -0.85],
              backgroundColor: function (ctx) { return ctx.raw == null ? "rgba(149,153,166,0.3)" : (ctx.raw >= 0 ? p.green : p.red); },
              borderRadius: 5,
              barPercentage: 0.7
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              displayColors: false,
              valueFmt: function (c) { return c.dataset.label + ": " + (c.parsed.y == null ? "无数据" : c.parsed.y.toFixed(2) + "%"); }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // 4. volumeChart — 沪深两市成交额对比
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/17)", "今日 (8/18)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.37, 2.25],
            backgroundColor: p.amber,
            borderRadius: 8,
            barPercentage: 0.5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({
              displayColors: false,
              valueFmt: function (c) { return "成交额: " + c.parsed.y + " 万亿"; }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + " 万亿"; } }, grid: { color: p.gridColor }, beginAtZero: false, min: 2.0, max: 2.6 }
          }
        }
      };
    },
    // 5. allIndexChart — 主要指数今日涨跌幅一览
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证成指", "上证指数", "中证500", "中证1000"],
          datasets: [{
            label: "今日涨跌幅",
            data: [0.70, 0.02, -0.20, -0.19, -0.63, -0.85],
            backgroundColor: function (ctx) { return ctx.raw == null ? "rgba(149,153,166,0.3)" : (ctx.raw >= 0 ? p.green : p.red); },
            borderRadius: 5,
            barPercentage: 0.7
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({
              displayColors: false,
              valueFmt: function (c) { return "涨跌幅: " + c.parsed.y.toFixed(2) + "%"; }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, maxRotation: 45, minRotation: 35 }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    }
  ]
};
