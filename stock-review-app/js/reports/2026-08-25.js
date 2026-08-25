/**
 * 2026-08-25 — A股收盘复盘报告
 * 4200股上涨却跑输大盘，权重搭台、小盘唱戏
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-08-25"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-25",
    subtitle: "4200股上涨却跑输大盘，权重搭台、小盘唱戏",
    dateLabel: "2026-08-25"
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
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.47%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.60pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.44%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.14pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300 加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.24%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.81pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.71%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+2.41pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓超额收益</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.91%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.74pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">强普涨</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--success">超4200股上涨</span>
              <span class="ds-statcard__caption">赚钱效应显著回暖</span>
            </span>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th class="num">今日（8/25）</th>
                <th class="num">前一日（8/21）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个股涨跌幅中位数</td>
                <td class="num" style="color:var(--stock-up)">+1.47%</td>
                <td class="num" style="color:var(--stock-down)">-0.13%</td>
                <td class="num" style="color:var(--stock-up)">+1.60pp</td>
              </tr>
              <tr>
                <td>加权指数（沪深300）</td>
                <td class="num" style="color:var(--stock-down)">-0.24%</td>
                <td class="num" style="color:var(--stock-up)">+0.57%</td>
                <td class="num" style="color:var(--stock-down)">-0.81pp</td>
              </tr>
              <tr>
                <td>指数失真剪刀差（中位数−加权）</td>
                <td class="num" style="color:var(--stock-up)">+1.71%</td>
                <td class="num" style="color:var(--stock-down)">-0.70%</td>
                <td class="num" style="color:var(--stock-up)">+2.41pp</td>
              </tr>
              <tr>
                <td>持仓收益率</td>
                <td class="num" style="color:var(--stock-down)">-0.44%</td>
                <td class="num" style="color:var(--stock-down)">-0.30%</td>
                <td class="num" style="color:var(--stock-down)">-0.14pp</td>
              </tr>
              <tr>
                <td>持仓收益 vs 中位数（超额）</td>
                <td class="num" style="color:var(--stock-down)">-1.91%</td>
                <td class="num" style="color:var(--stock-down)">-0.17%</td>
                <td class="num" style="color:var(--stock-down)">-1.74pp</td>
              </tr>
              <tr>
                <td>赚钱效应评级</td>
                <td>强普涨（超4200只个股上涨）</td>
                <td>指数强于个股</td>
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
            今日中位数<span class="num" style="color:var(--stock-up)">+1.47%</span>，但沪深300下跌<span class="num" style="color:var(--stock-down)">0.24%</span>，剪刀差急剧扩大至<span class="num" style="color:var(--stock-up)">+1.71%</span>，说明中小盘个股全面跑赢权重，属典型的"个股赚钱效应爆棚但指数失真"行情。全市场超4200只个股上涨。您的持仓收益<span class="num" style="color:var(--stock-down)">-0.44%</span>，大幅跑输全市场中位数1.91个百分点，连续三日跑输市场平均，持仓结构与市场最强方向严重偏离，需紧急审视持仓结构。
          </p>
        </div>
      `
    },
    {
      id: "style",
      index: "02",
      title: "风格强弱排名",
      html: `
        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>排名</th>
                <th>指数</th>
                <th class="num">今日涨跌幅</th>
                <th class="num">前日涨跌幅（8/21）</th>
                <th class="num">环比（今日-前日）</th>
                <th class="num">今日成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>国证2000</td>
                <td class="num" style="color:var(--stock-up)">+0.99%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">5,651亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--stock-up)">+0.91%</td>
                <td class="num" style="color:var(--stock-down)">-0.57%</td>
                <td class="num" style="color:var(--stock-up)">+1.48pp</td>
                <td class="num">127亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>中证1000</td>
                <td class="num" style="color:var(--stock-up)">+0.48%</td>
                <td class="num">待核实</td>
                <td class="num">—</td>
                <td class="num">4,018亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-down)">-1.00%</td>
                <td class="num" style="color:var(--stock-up)">+1.43%</td>
                <td class="num" style="color:var(--stock-down)">-2.43pp</td>
                <td class="num">4,640亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>中证红利</td>
                <td class="num" style="color:var(--stock-down)">-0.61%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>深证100</td>
                <td class="num" style="color:var(--stock-down)">-0.55%</td>
                <td class="num">—</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-up)">+0.19%</td><td class="num">3,889.44</td><td class="num">8,589亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-down)">-0.35%</td><td class="num">13,745.87</td><td class="num">9,730亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-down)">-0.24%</td><td class="num">4,552.03</td><td class="num">4,804亿</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-up)">+0.14%</td><td class="num">1,604.59</td><td class="num">753亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-down)">-1.00%</td><td class="num">3,397.52</td><td class="num">4,640亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-down)">-0.08%</td><td class="num">7,710.94</td><td class="num">3,263亿</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-up)">+0.48%</td><td class="num">7,527.50</td><td class="num">4,018亿</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-up)">+0.91%</td><td class="num">1,063.20</td><td class="num">127亿</td></tr>
                <tr><td>万得全A</td><td class="num" style="color:var(--stock-up)">+0.27%</td><td class="num">6,390.34</td><td class="num">—</td></tr>
                <tr><td>科创综指</td><td class="num">0.00%</td><td class="num">1,896.08</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            中小盘全面碾压权重——国证2000（<span class="num" style="color:var(--stock-up)">+0.99%</span>）领涨全场，北证50（<span class="num" style="color:var(--stock-up)">+0.91%</span>）紧随其后，中证1000（<span class="num" style="color:var(--stock-up)">+0.48%</span>）也明显跑赢大盘。创业板指（<span class="num" style="color:var(--stock-down)">-1.00%</span>）和沪深300（<span class="num" style="color:var(--stock-down)">-0.24%</span>）领跌，成长权重遭系统性抛售。小盘股表现强于大盘，市场风格偏向成长小票。
          </p>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "03",
      title: "流动性异动警报",
      html: `
        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">成交额连续三日缩量</div>
            <div class="ds-alert__desc">沪深两市合计 1.83万亿，较前日缩量约 505亿（-2.7%），跌破1.9万亿关口</div>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th>今日（8/25）</th>
                <th class="num">前一日（8/21）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>沪深两市合计成交额</td>
                <td>1.83万亿（沪8,589亿/深9,730亿）</td>
                <td class="num">1.88万亿</td>
                <td class="num" style="color:var(--status-warning-default)">缩量约505亿（-2.7%）</td>
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
            成交额连续三日缩量，跌破1.9万亿关口。缩量+超4200股上涨+中位数+1.47%的组合，说明增量资金仍未入场，属存量资金调仓；资金集中流向中小盘/题材（粮食、医药），权重股遭冷落；成交额较上一交易日缩量约1,756亿。若成交持续萎缩，中小盘行情的持续性存疑。
          </p>
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
            <p class="text-[var(--text-default)] font-medium text-sm">"4200股上涨却跑输大盘，权重搭台、小盘唱戏"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">个股普涨但指数分化：</strong>全市场超4200只个股上涨，但上证仅微涨0.19%，创业板指大跌1.00%。中位数+1.47% vs 沪深300 -0.24%，剪刀差高达1.71%，属典型的"赚个股不赚指数"行情。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">农业/医药领涨，贵金属/锂矿重挫：</strong>粮食概念爆发，万向德农、金健米业、登海种业涨停；CRO概念走强，凯莱英涨停。贵金属板块大幅走弱，西部黄金、招金黄金跌超7%；能源金属震荡走弱，盛新锂能、永兴材料跌超6%。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">风格极端分化：</strong>国证2000（+0.99%）领涨，北证50（+0.91%）紧随其后；创业板指（-1.00%）领跌全场。小盘股表现强于大盘，市场风格偏向成长小票。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现严重落后：</strong>您今日持仓收益-0.44%，跑输全市场中位数1.91个百分点，连续三日跑输市场平均。在超4200股上涨、中位数+1.47%的背景下，持仓收益为负，推测持仓高度集中于今日表现最弱的板块——创业板权重（宁德时代等）、贵金属（黄金股）、锂矿等方向。建议紧急审视持仓结构，考虑是否向当前市场最强方向（中小盘/粮食/医药）适度调仓。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-triangle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">缩量信号需警惕：</strong>两市成交缩至1.83万亿，连续三日缩量。缩量+中小盘领涨说明资金在存量内腾挪，而非增量入场。若成交持续萎缩，中小盘行情持续性存疑。</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。持仓收益连续大幅跑输中位数，建议关注持仓结构与市场风格的匹配度。",
    generatedAt: "报告生成时间：2026-08-25"
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
              label: "今日（8/25）",
              data: [1.47, -0.24, -0.44, 1.71],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            },
            {
              label: "前一日（8/21）",
              data: [-0.13, 0.57, -0.30, -0.70],
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
          labels: ["国证2000", "北证50", "中证1000", "沪深300", "中证红利", "创业板指"],
          datasets: [{
            label: "今日涨跌幅",
            data: [0.99, 0.91, 0.48, -0.24, -0.61, -1.00],
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
          labels: ["8/21", "8/25"],
          datasets: [{
            label: "成交额（万亿）",
            data: [1.88, 1.83],
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
