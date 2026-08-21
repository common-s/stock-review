/**
 * 2026-08-10 — A股收盘复盘报告（风格再度逆转 · 成长遭抛售 防御逆势走强）
 * Migrated from the legacy light-theme HTML report into the Trae dark design
 * system data format. Consumed by app.js via window.REPORTS["2026-08-10"].
 *
 * Canvas order (DOM) === charts[] order: divergenceChart, styleChart,
 * reversalChart, volumeChart, allIndexChart.
 */
window.REPORTS["2026-08-10"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-10",
    subtitle: "风格再度逆转 · 成长遭抛售 防御逆势走强",
    dateLabel: "2026-08-10"
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
            <span class="ds-statcard__value" style="color:var(--status-success-default)">+1.34%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.23pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.52%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.35pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--status-success-default)">+1.86%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+2.58pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">🔥 强普涨</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--success">超3400只个股上涨</span>
              <span class="ds-statcard__caption">大幅回暖</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">中位数 vs 沪深300 — 前日(8/7)与今日(8/10)对比</h3>
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
            <div class="ds-alert__desc">今日中位数 <b>+1.34%</b>，沪深300却下跌 <b>-0.52%</b>，剪刀差急剧扩大至 <b>+1.86%</b>。个股全面跑赢权重，超3400只个股上涨（占比约65%），与上周五“指数强于个股”的格局完全逆转——赚钱效应爆棚但指数失真。</div>
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
          <h3 class="ds-card__title">关键指数：上周五(8/7) vs 今日(8/10) — “最强即最弱”一日游</h3>
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
                <th class="num">前日涨跌幅(8/7)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥇 最强</span></td>
                <td>中证红利</td>
                <td class="num" style="color:var(--status-success-default)">+1.11%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥈 最强</span></td>
                <td>恒生指数</td>
                <td class="num" style="color:var(--status-success-default)">+0.83%</td>
                <td class="num" style="color:var(--status-success-default)">+0.15%</td>
                <td class="num" style="color:var(--status-success-default)">+0.68pp</td>
                <td class="num">2,597亿港元</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥉 最强</span></td>
                <td>上证指数</td>
                <td class="num" style="color:var(--status-success-default)">+0.20%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥇 最弱</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--status-error-default)">-2.18%</td>
                <td class="num" style="color:var(--status-success-default)">+1.75%</td>
                <td class="num" style="color:var(--status-error-default)">-3.93pp</td>
                <td class="num">约4,291亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥈 最弱</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--status-error-default)">-1.57%~-1.97%</td>
                <td class="num" style="color:var(--status-success-default)">+2.28%</td>
                <td class="num" style="color:var(--status-error-default)">约-3.85pp</td>
                <td class="num">约1,278亿(估算)</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥉 最弱</span></td>
                <td>深证100</td>
                <td class="num" style="color:var(--status-error-default)">-1.36%~-1.43%</td>
                <td class="num" style="color:var(--status-success-default)">+1.22%</td>
                <td class="num" style="color:var(--status-error-default)">约-2.65pp</td>
                <td class="num">未披露</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--status-success-default)">+0.20%</td><td class="num">3,947.91</td><td class="num">—</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--status-error-default)">-1.13%</td><td class="num">14,148.86</td><td class="num">—</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--status-error-default)">-0.52%</td><td class="num">4,670.05</td><td class="num">5,054亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--status-error-default)">-0.47%</td><td class="num">7,942.84</td><td class="num">—</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--status-error-default)">-0.42%</td><td class="num">7,647.01</td><td class="num">3,630亿</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--status-error-default)">-0.78%</td><td class="num">1,125.45</td><td class="num">122亿</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="refresh-cw" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">风格彻底反转</div>
            <div class="ds-alert__desc">上周五领涨的<b>科创50</b>（+2.28%）和<b>创业板指</b>（+1.75%）今日分别大跌约 <b>1.8%</b> 和 <b>2.18%</b>——“上周最强即今日最弱”特征极为明显。而<b>中证红利</b>逆势大涨 <b>+1.11%</b> 领涨，市场从“成长进攻”急转至“防御避险”。</div>
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
            <span class="ds-statcard__value" style="display:block;margin:10px 0;font-size:30px;">≈2.7万亿+</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>放量约2,000亿+</span>
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
            <div class="ds-alert__desc">成交额显著放量，预计全天超 <b>2.7万亿</b>，较上周五明显放大。但放量伴随剧烈风格切换——资金从上周五暴涨的科创/创业板权重大幅流出，涌入消费、红利等防御板块及中小盘个股。<b>放量 + 普涨 + 指数跌</b>的组合，说明增量资金主要流向中小盘个股，而非权重股。若后续成交能持续维持在 <b>2.6万亿</b> 以上，中小盘行情有望延续。</div>
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
            <p class="text-[var(--text-default)] font-medium text-sm">市场风格再度180°逆转</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-error-default)"></i>
                <span><strong class="text-[var(--text-default)]">成长权重遭暴力抛售</strong>：上周五领涨的科创50 <span class="ds-tag ds-tag--success">+2.28%</span> 今日大跌约 <span class="ds-tag ds-tag--danger">-1.8%</span>，创业板指 <span class="ds-tag ds-tag--success">+1.75%</span> 暴跌 <span class="ds-tag ds-tag--danger">-2.18%</span>——“周五最强即周一最弱”的一日游特征再度上演。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-success-default)"></i>
                <span><strong class="text-[var(--text-default)]">防御板块逆势走强</strong>：中证红利大涨 <span class="ds-tag ds-tag--success">+1.11%</span> 领涨主要指数，食品饮料、创新药、养殖等消费板块涨幅居前，CPO、通信设备等科技板块大幅下跌。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="refresh-cw" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向再度逆转</strong>：上周五剪刀差 <span class="ds-tag ds-tag--danger">-0.72%</span>（指数强于个股），今日剪刀差飙升至 <span class="ds-tag ds-tag--success">+1.86%</span>（个股全面强于指数）——赚钱效应从“权重集中”一夜之间回到“个股普涨”。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="shuffle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                <span><strong class="text-[var(--text-default)]">放量但分化</strong>：两市成交显著放量至 <strong class="text-[var(--text-default)]">2.7万亿+</strong>，但属于存量资金大迁徙（从科技成长流向消费防御和小微盘），风格切换极为剧烈。</span>
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
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。近三个交易日风格一日一换，追涨杀跌风险极大，建议保持仓位灵活。",
    generatedAt: "报告生成时间：2026-08-10"
  },
  charts: [
    // 1. divergenceChart — 中位数 vs 沪深300，前日(8/7) vs 今日(8/10)
    function (p) {
      var grayBar = "rgba(149,153,166,0.3)";
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/7)", "今日 (8/10)"],
          datasets: [
            { label: "中位数涨跌幅", data: [0.11, 1.34], backgroundColor: [grayBar, p.green], borderRadius: 6, barPercentage: 0.4 },
            { label: "沪深300涨跌幅", data: [0.83, -0.52], backgroundColor: [p.green, p.red], borderRadius: 6, barPercentage: 0.4 }
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
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
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
          labels: ["中证红利", "恒生指数", "上证指数", "深证100", "科创50", "创业板指"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.11, 0.83, 0.20, -1.40, -1.77, -2.18],
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
    // 3. reversalChart — 关键指数 上周五(8/7) vs 今日(8/10)
    function (p) {
      var nullColor = "rgba(149,153,166,0.3)";
      function bg(ctx) {
        var v = ctx.raw;
        return v === null || v === undefined ? nullColor : (v >= 0 ? p.green : p.red);
      }
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证100", "中证红利", "恒生指数"],
          datasets: [
            { label: "上周五 (8/7)", data: [2.28, 1.75, 1.22, null, 0.15], backgroundColor: bg, borderRadius: 5, barPercentage: 0.7 },
            { label: "今日 (8/10)", data: [-1.77, -2.18, -1.40, 1.11, 0.83], backgroundColor: bg, borderRadius: 5, barPercentage: 0.7 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              valueFmt: function (c) { return c.dataset.label + ": " + (c.parsed.y === null ? "无数据" : c.parsed.y.toFixed(2) + "%"); }
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
          labels: ["前日 (8/7)", "今日 (8/10)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.50, 2.70],
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
          labels: ["中证红利", "恒生指数", "上证指数", "中证1000", "中证500", "沪深300", "北证50", "深证成指", "深证100", "科创50", "创业板指"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.11, 0.83, 0.20, -0.42, -0.47, -0.52, -0.78, -1.13, -1.40, -1.77, -2.18],
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
    }
  ]
};
