/**
 * 2026-08-11.js — A股收盘复盘报告（2026-08-11）。
 * 由旧版浅色 HTML 报告迁移至 Trae 深色设计系统数据格式。
 * 结构：window.REPORTS["2026-08-11"] = { header, sections, footer, charts }。
 */
window.REPORTS["2026-08-11"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-11",
    subtitle: "赚指数不赚钱 · 超4000股上涨但中位数为负",
    dateLabel: "2026-08-11"
  },
  sections: [
    {
      id: "sentiment",
      index: "01",
      title: "全市场情绪体温计",
      html: `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="ds-statcard">
            <span class="ds-statcard__label">个股涨跌幅中位数</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.63%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.97pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--status-success-default)">+0.16%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.68pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.79%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-2.65pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--status-warning-default);font-size:var(--heading-sm-font-size)">⚠️ 指数强于个股</span>
            <span class="ds-statcard__delta">
              <span>超4000股上涨 · 效应转弱</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">中位数 vs 沪深300 — 前日(8/10)与今日(8/11)对比</h3>
          <div class="relative" style="height:240px;">
            <canvas id="divergenceChart"></canvas>
          </div>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">核心信号</div>
            <div class="ds-alert__desc">今日中位数 <b>-0.63%</b>，沪深300却微涨 <b>+0.16%</b>，剪刀差由正转负达 <b>-0.79%</b>。全市场超4000只个股上涨与中位数为负同时出现——大量个股涨幅微弱，而下跌个股跌幅较大拉低了中位数。典型的<b>“赚指数不赚钱”</b>行情。</div>
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
          <h3 class="ds-card__title">关键指数：前日(8/10) vs 今日(8/11) — 中小盘翻多 科技仍弱</h3>
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
                <th class="num">前日涨跌幅(8/10)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>中证2000</td>
                <td class="num" style="color:var(--status-success-default)">+1.15%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">未披露</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>中证1000</td>
                <td class="num" style="color:var(--status-success-default)">+0.71%</td>
                <td class="num" style="color:var(--status-error-default)">-0.42%</td>
                <td class="num" style="color:var(--status-success-default)">+1.13pp</td>
                <td class="num">4,370亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>中证500</td>
                <td class="num" style="color:var(--status-success-default)">+0.64%</td>
                <td class="num" style="color:var(--status-error-default)">-0.47%</td>
                <td class="num" style="color:var(--status-success-default)">+1.11pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--status-error-default)">-1.00%</td>
                <td class="num" style="color:var(--status-error-default)">-0.78%</td>
                <td class="num" style="color:var(--status-error-default)">-0.22pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--status-error-default)">-0.73%</td>
                <td class="num" style="color:var(--status-error-default)">-2.18%</td>
                <td class="num" style="color:var(--status-success-default)">+1.45pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--status-error-default)">-0.36%</td>
                <td class="num" style="color:var(--status-error-default)">-1.57%~-1.97%</td>
                <td class="num" style="color:var(--status-success-default)">+1.21~1.61pp</td>
                <td class="num">1,284亿</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--status-success-default)">+0.67%</td><td class="num">3,966.59</td><td class="num">—</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--status-success-default)">+0.04%</td><td class="num">14,316.96</td><td class="num">—</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--status-success-default)">+0.16%</td><td class="num">4,702.02</td><td class="num">—</td></tr>
                <tr><td>上证50</td><td class="num" style="color:var(--status-success-default)">+0.25%</td><td class="num">2,967</td><td class="num">—</td></tr>
                <tr><td>万得全A</td><td class="num" style="color:var(--status-success-default)">+0.53%</td><td class="num">—</td><td class="num">—</td></tr>
                <tr><td>恒生指数</td><td class="num" style="color:var(--status-success-default)">+1.05%</td><td class="num">25,937.49</td><td class="num">2,403亿港元</td></tr>
                <tr><td>恒生中国企业指数</td><td class="num" style="color:var(--status-success-default)">+1.06%</td><td class="num">8,621.84</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-alert ds-alert--info">
          <div class="ds-alert__icon">
            <i data-lucide="trending-up" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">小微盘延续强势</div>
            <div class="ds-alert__desc">中证2000 <b>+1.15%</b> 和中证1000 <b>+0.71%</b> 继续领涨，万得微盘股指数大涨 <b>+3.29%</b>，资金持续流向小微盘。而创业板指和科创50虽跌幅收窄但仍收跌，北证50连续两日走弱。恒生指数大涨 <b>+1.05%</b>，与A股形成联动。</div>
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
          <div class="ds-statcard" style="text-align:center;padding:24px;">
            <span class="ds-statcard__label">沪深两市合计成交额</span>
            <span class="ds-statcard__value" style="display:block;margin:10px 0;font-size:30px;">2.54万亿</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>缩量约1,447亿</span>
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
            <div class="ds-alert__desc">成交额显著缩量，较前日减少约 <b>1,447亿</b>。<b>缩量 + 超4000股上涨 + 中位数为负</b>的组合，说明增量资金不足，存量博弈特征明显；上涨个股涨幅微弱，市场追高意愿不强；科技权重股（寒武纪、中际旭创等）大幅下跌拖累指数。若成交持续在 <b>2.5万亿</b> 附近徘徊，突破4000点压力区难度较大。</div>
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
            <p class="text-[var(--text-default)] font-medium text-sm">赚钱效应与指数表现严重背离</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="scissors" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                <span><strong class="text-[var(--text-default)]">超4000股上涨但中位数为负：</strong>全市场4068只个股上涨，但中位数仅 <span class="ds-tag ds-tag--danger">-0.63%</span>，说明大量个股微涨（0~0.5%），而下跌个股跌幅较大拉低了中位数。典型的“赚指数不赚钱”行情。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-success-default)"></i>
                <span><strong class="text-[var(--text-default)]">小微盘继续领跑：</strong>中证2000 <span class="ds-tag ds-tag--success">+1.15%</span> 和中证1000 <span class="ds-tag ds-tag--success">+0.71%</span> 延续强势，万得微盘股指数大涨 <span class="ds-tag ds-tag--success">+3.29%</span>，资金持续流向小微盘。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-error-default)"></i>
                <span><strong class="text-[var(--text-default)]">科技权重股拖累指数：</strong>寒武纪、中际旭创均跌逾 <span class="ds-tag ds-tag--danger">6%</span>，新易盛跌逾 <span class="ds-tag ds-tag--danger">5%</span>，仅寒武纪、中国人寿、海光信息三只股票对上证指数负贡献就达 <span class="ds-tag ds-tag--danger">-4.87点</span>。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">板块分化明显：</strong>农林牧渔 <span class="ds-tag ds-tag--success">+3.14%</span>、食品饮料 <span class="ds-tag ds-tag--success">+2.51%</span>、纺织服饰 <span class="ds-tag ds-tag--success">+2.40%</span> 涨幅居前；通信 <span class="ds-tag ds-tag--danger">-3.16%</span>、电子 <span class="ds-tag ds-tag--danger">-0.49%</span>、计算机 <span class="ds-tag ds-tag--danger">-0.26%</span> 下跌，科技板块持续调整。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="circle-dollar-sign" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">港股强势：</strong>恒生指数大涨 <span class="ds-tag ds-tag--success">+1.05%</span>，恒生科技指数涨 <span class="ds-tag ds-tag--success">+1.26%</span>，黄金股领涨。</span>
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

        <div class="ds-card">
          <h3 class="ds-card__title">板块涨跌幅 — 消费领涨 vs 科技调整</h3>
          <div class="relative" style="height:240px;">
            <canvas id="sectorChart"></canvas>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。缩量+超4000股上涨但中位数为负，反映市场“虚涨”成分较大，需警惕后续分化加剧。",
    generatedAt: "报告生成时间：2026-08-11"
  },
  charts: [
    // 1. divergenceChart — 中位数 vs 沪深300，前日 vs 今日
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/10)", "今日 (8/11)"],
          datasets: [
            { label: "中位数涨跌幅", data: [1.34, -0.63], backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 6, barPercentage: 0.4 },
            { label: "沪深300涨跌幅", data: [-0.52, 0.16], backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 6, barPercentage: 0.4 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              valueFmt: function (c) { return c.dataset.label + ": " + c.parsed.y.toFixed(2) + "%"; }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { color: p.gridColor } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // 2. styleChart — 最强 vs 最弱，横向条形
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["中证2000", "中证1000", "中证500", "科创50", "创业板指", "北证50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.15, 0.71, 0.64, -0.36, -0.73, -1.00],
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
    // 3. reversalChart — 关键指数前日 vs 今日
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["中证1000", "中证500", "科创50", "创业板指", "北证50"],
          datasets: [
            { label: "前日 (8/10)", data: [-0.42, -0.47, -1.77, -2.18, -0.78], backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 5, barPercentage: 0.7 },
            { label: "今日 (8/11)", data: [0.71, 0.64, -0.36, -0.73, -1.00], backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; }, borderRadius: 5, barPercentage: 0.7 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              valueFmt: function (c) { return c.dataset.label + ": " + c.parsed.y.toFixed(2) + "%"; }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // 4. volumeChart — 成交额对比
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/10)", "今日 (8/11)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.70, 2.54],
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
              valueFmt: function (c) { return "成交额: " + c.parsed.y + "万亿"; }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: {
              beginAtZero: false,
              min: 2.3,
              max: 2.9,
              ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "万亿"; } },
              grid: { color: p.gridColor }
            }
          }
        }
      };
    },
    // 5. allIndexChart — 主要指数今日涨跌幅一览
    function (p) {
      var nullColor = "rgba(149,153,166,0.3)";
      return {
        type: "bar",
        data: {
          labels: ["中证2000", "恒生国企", "恒生指数", "中证1000", "中证500", "万得全A", "上证指数", "上证50", "沪深300", "深证成指", "科创50", "创业板指", "北证50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.15, 1.06, 1.05, 0.71, 0.64, 0.53, 0.67, 0.25, 0.16, 0.04, -0.36, -0.73, -1.00],
            backgroundColor: function (ctx) {
              var v = ctx.raw;
              return v === null || v === undefined ? nullColor : (v >= 0 ? p.green : p.red);
            },
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
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 10 }, maxRotation: 45, minRotation: 35 }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    },
    // 6. sectorChart — 板块涨跌幅
    function (p) {
      var nullColor = "rgba(149,153,166,0.3)";
      return {
        type: "bar",
        data: {
          labels: ["农林牧渔", "食品饮料", "纺织服饰", "计算机", "电子", "通信"],
          datasets: [{
            label: "板块涨跌幅",
            data: [3.14, 2.51, 2.40, -0.26, -0.49, -3.16],
            backgroundColor: function (ctx) {
              var v = ctx.raw;
              return v === null || v === undefined ? nullColor : (v >= 0 ? p.green : p.red);
            },
            borderRadius: 6,
            barPercentage: 0.6
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
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } }
          }
        }
      };
    }
  ]
};
