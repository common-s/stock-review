/**
 * 2026-08-17 — A股收盘复盘报告
 * Migrated from the legacy light-theme HTML report into the Trae dark design system.
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-08-17"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-17",
    subtitle: "科创领涨全场 · 量价齐升 · 持仓收益+2.79%大幅跑赢",
    dateLabel: "2026-08-17"
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
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.34%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.55pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.41%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.98pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.07%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.43pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+2.79%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+2.48pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">超额收益（持仓−中位数）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.45%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.93pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--stock-up);font-size:var(--heading-sm-font-size)">强普涨</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--success">超3800只上涨</span>
              <span class="ds-statcard__caption">占比约72%</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">中位数 vs 沪深300 vs 持仓收益 — 前日(8/14)与今日(8/17)对比</h3>
          <div class="relative" style="height:240px;">
            <canvas id="divergenceChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">持仓收益分析</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            您今日持仓收益 <span class="num" style="color:var(--stock-up)">+2.79%</span>，大幅跑赢全市场中位数 <span class="num" style="color:var(--stock-up)">+1.34%</span> 共 <span class="num">1.45个百分点</span>，超额收益显著扩大。同时跑赢沪深300（<span class="num" style="color:var(--stock-up)">+1.41%</span>）<span class="num">1.38个百分点</span>。持仓收益接近创业板指（<span class="num" style="color:var(--stock-up)">+2.80%</span>）水平，说明持仓结构与市场最强方向高度契合，超额收益连续三日为正。
          </p>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">核心信号</div>
            <div class="ds-alert__desc">
              今日中位数 <span class="num" style="color:var(--stock-up)">+1.34%</span>，沪深300大涨 <span class="num" style="color:var(--stock-up)">+1.41%</span>，剪刀差仅 <span class="num" style="color:var(--stock-down)">-0.07%</span>，接近持平。个股与权重同步上涨，市场共振良好，与前期“指数失真”格局截然不同。全市场超 <span class="num">3800只</span> 个股上涨（占比约 <span class="num">72%</span>），属典型的普涨行情，赚钱效应大幅回暖。
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
          <h3 class="ds-card__title">最强 vs 最弱 — 今日涨跌幅对比</h3>
          <div class="relative" style="height:260px;">
            <canvas id="styleChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">关键指数：前日(8/14) vs 今日(8/17) — “科技成长全面爆发”</h3>
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
                <th class="num">前日涨跌幅(8/14)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-up)">+3.04%</td>
                <td class="num" style="color:var(--stock-down)">-1.11%</td>
                <td class="num" style="color:var(--stock-up)">+4.15pp</td>
                <td class="num">约1,300亿(估算)</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-up)">+2.80%</td>
                <td class="num" style="color:var(--stock-up)">+1.12%</td>
                <td class="num" style="color:var(--stock-up)">+1.67pp</td>
                <td class="num">5,306亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>深证成指</td>
                <td class="num" style="color:var(--stock-up)">+2.19%</td>
                <td class="num" style="color:var(--stock-up)">+0.45%</td>
                <td class="num" style="color:var(--stock-up)">+1.74pp</td>
                <td class="num">10,743亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>中证红利</td>
                <td class="num" style="color:var(--stock-up)">+0.19%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">153亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>上证50</td>
                <td class="num" style="color:var(--stock-up)">+0.81%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--stock-up)">+1.41%</td>
                <td class="num" style="color:var(--stock-down)">-0.93%</td>
                <td class="num" style="color:var(--stock-up)">+2.34pp</td>
                <td class="num">125亿</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-up)">+1.24%</td><td class="num">3,975.68</td><td class="num">9,429亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-up)">+2.19%</td><td class="num">14,669.28</td><td class="num">10,743亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-up)">+1.41%</td><td class="num">4,731.53</td><td class="num">—</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-up)">+3.04%</td><td class="num">约1,770(估算)</td><td class="num">约1,300亿(估算)</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)">+2.80%</td><td class="num">3,727.78</td><td class="num">5,306亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-up)">+1.61%</td><td class="num">8,119.26</td><td class="num">—</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-up)">+1.52%</td><td class="num">7,887.92</td><td class="num">—</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-up)">+1.41%</td><td class="num">1,102.85</td><td class="num">125亿</td></tr>
                <tr><td>中证红利</td><td class="num" style="color:var(--stock-up)">+0.19%</td><td class="num">5,488.93</td><td class="num">153亿</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="rocket" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">科创/成长全面领涨，防御风格垫底</div>
            <div class="ds-alert__desc">
              <strong class="text-[var(--text-default)]">科创50</strong>大涨 <span class="num" style="color:var(--stock-up)">+3.04%</span> 领涨全场，<strong class="text-[var(--text-default)]">创业板指</strong>涨 <span class="num" style="color:var(--stock-up)">+2.80%</span> 紧随其后，科创综指半日涨近3%。此前连续弱势的<strong class="text-[var(--text-default)]">北证50</strong>（<span class="num" style="color:var(--stock-up)">+1.41%</span>）显著修复。<strong class="text-[var(--text-default)]">中证红利</strong>仅涨 <span class="num" style="color:var(--stock-up)">+0.19%</span> 成为今日最弱宽基指数，白酒板块大跌（贵州茅台跌超4%失守1300元），资金从防御全面涌向科技成长。
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
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="ds-statcard" style="text-align:center;">
            <span class="ds-statcard__label">沪深两市合计成交额</span>
            <span class="ds-statcard__value" style="color:var(--stock-up);font-size:var(--heading-md-font-size)">约2.37万亿</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>放量约2,300亿(+10.7%)</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-card" style="margin-bottom:0;">
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
            <div class="ds-alert__desc">
              成交额显著放量，较前日增加约 <span class="num">2,300亿</span>（<span class="num" style="color:var(--stock-up)">+10.7%</span>），连续第 <span class="num">16个交易日</span> 突破2万亿。<strong class="text-[var(--text-default)]">放量 + 普涨 + 超3800股上涨</strong>的组合，说明增量资金入场意愿增强，属量价齐升的良性格局；资金全面涌向科技成长（科创/创业板），防御板块（红利）遭冷落。若成交能持续维持在 <span class="num">2.3万亿</span> 以上，反弹延续性较强。
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
            <p class="text-[var(--text-default)] font-medium text-sm">科创领涨，量价齐升，普涨格局</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="rocket" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">科创/成长全面爆发：</strong>科创50大涨 <span class="ds-tag ds-tag--success">+3.04%</span> 领涨全场，创业板指涨 <span class="ds-tag ds-tag--success">+2.80%</span>，科创综指半日涨近3%。存储芯片、先进封装、光刻机、算力硬件等科技板块集体爆发。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">防御板块明显落后：</strong>中证红利仅涨 <span class="ds-tag ds-tag--success">+0.19%</span>，白酒板块大跌（贵州茅台跌超 <span class="num">4%</span> 失守1300元），食品饮料板块领跌。资金从防御全面切向进攻成长。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="sprout" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">农业与科技双主线并行：</strong>粮食概念、养殖业方向活跃，转基因、玉米、大豆等农业板块走强；算力硬件、半导体芯片同步大涨，市场呈现“科技+农业”双轮驱动格局。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="activity" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数与个股共振：</strong>今日剪刀差仅 <span class="ds-tag ds-tag--danger">-0.07%</span>，说明权重与个股同步上涨，市场共振良好，与前期“指数失真”格局截然不同。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="pie-chart" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现极为优异：</strong>您今日持仓收益 <span class="ds-tag ds-tag--success">+2.79%</span>，跑赢全市场中位数 <span class="ds-tag ds-tag--success">+1.34%</span> 共 <span class="num">1.45个百分点</span>，超额收益大幅扩大。持仓收益接近创业板指（+2.80%）水平，说明持仓结构与市场最强方向高度契合。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="zap" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                <span><strong class="text-[var(--text-default)]">量价齐升信号积极：</strong>两市成交显著放量至 <span class="num">2.37万亿</span> 以上，放量+普涨的组合说明增量资金入场，属良性上涨格局。若成交能持续维持在2.3万亿以上，反弹行情有望延续。</span>
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
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。持仓收益对比仅为客观展示，不构成操作建议。科技板块短期涨幅较大，需警惕获利回吐压力。",
    generatedAt: "报告生成时间：2026-08-17"
  },
  charts: [
    // 1. divergenceChart — 中位数/沪深300/持仓 前日 vs 今日
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/14)", "今日 (8/17)"],
          datasets: [
            { label: "中位数涨跌幅", data: [-0.21, 1.34], backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 6, barPercentage: 0.25 },
            { label: "沪深300涨跌幅", data: [-0.57, 1.41], backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 6, barPercentage: 0.25 },
            { label: "持仓收益率", data: [0.31, 2.79], backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 6, barPercentage: 0.25 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return c.dataset.label + ": " + (c.parsed.y === null ? "无数据" : c.parsed.y.toFixed(2) + "%"); } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { color: p.gridColor } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // 2. styleChart — 今日各宽基指数涨跌幅（横向条）
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证成指", "中证500", "中证1000", "上证指数", "北证50", "上证50", "中证红利"],
          datasets: [{
            label: "今日涨跌幅",
            data: [3.04, 2.80, 2.19, 1.61, 1.52, 1.24, 1.41, 0.81, 0.19],
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
    // 3. reversalChart — 关键指数 前日(8/14) vs 今日(8/17)
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证成指", "北证50", "沪深300", "中证红利"],
          datasets: [
            { label: "前日 (8/14)", data: [-1.11, 1.12, 0.45, -0.93, -0.57, null], backgroundColor: function (ctx) { if (ctx.raw === null || ctx.raw === undefined) return "rgba(149,153,166,0.3)"; return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 5, barPercentage: 0.7 },
            { label: "今日 (8/17)", data: [3.04, 2.80, 2.19, 1.41, 1.41, 0.19], backgroundColor: function (ctx) { if (ctx.raw === null || ctx.raw === undefined) return "rgba(149,153,166,0.3)"; return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 5, barPercentage: 0.7 }
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
    // 4. volumeChart — 沪深两市成交额对比（万亿）
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/14)", "今日 (8/17)"],
          datasets: [{ label: "成交额（万亿）", data: [2.14, 2.37], backgroundColor: p.amber, borderRadius: 8, barPercentage: 0.5 }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return "成交额: " + c.parsed.y + "万亿"; } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { min: 2.0, max: 2.6, ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "万亿"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // 5. allIndexChart — 主要指数今日涨跌幅一览
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证成指", "中证500", "中证1000", "北证50", "上证指数", "沪深300", "上证50", "中证红利"],
          datasets: [{
            label: "今日涨跌幅",
            data: [3.04, 2.80, 2.19, 1.61, 1.52, 1.41, 1.24, 1.41, 0.81, 0.19],
            backgroundColor: function (ctx) { if (ctx.raw === null || ctx.raw === undefined) return "rgba(149,153,166,0.3)"; return ctx.raw >= 0 ? p.green : p.red; },
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
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, maxRotation: 45, minRotation: 35 }, grid: { display: false } }
          }
        }
      };
    }
  ]
};
