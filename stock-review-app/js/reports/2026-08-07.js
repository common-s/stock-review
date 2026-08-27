/**
 * 2026-08-07 — A股收盘复盘报告（风格180°逆转 · 权重搭台 小盘退潮）
 * Migrated from the legacy light-theme HTML report into the Trae dark design
 * system data format. Consumed by app.js via window.REPORTS["2026-08-07"].
 *
 * Canvas order (DOM) === charts[] order: divergenceChart, styleChart,
 * volumeChart, allIndexChart.
 */
window.REPORTS["2026-08-07"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-07",
    subtitle: "风格180°逆转 · 权重搭台 小盘退潮",
    dateLabel: "2026-08-07"
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
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.11%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.05pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.83%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.98pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.72%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.93pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">⚠️ 指数强于个股</span>
            <span class="ds-statcard__delta">
              <span>权重领涨 · 效应转弱</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">指数失真剪刀差趋势（中位数 − 加权指数）</h3>
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
            <div class="ds-alert__desc">今日中位数仅 <b>+0.11%</b>，沪深300却大涨 <b>+0.83%</b>，剪刀差由正转负达 <b>-0.72%</b>。权重股显著跑赢中小盘，风格与昨日完全相反——赚钱效应从“个股扩散”急转为“权重集中”。</div>
          </div>
        </div>
      `
    },
    { id: "profit", index: "02", title: "赚钱效应分析", html: `<div class="ds-profit__stack"><div class="ds-profit-rating"><div class="ds-profit-rating__icon-wrap">⚠️</div><div class="ds-profit-rating__body"><div class="ds-profit-rating__title">⚠️ 指数强于个股</div><div class="ds-profit-rating__chips"><span class="ds-tag ds-tag--warning">指数强于个股</span><span class="ds-tag ds-tag--warning">💡 指数强 · 剪刀差 -0.72%</span></div><p class="ds-profit-rating__desc"><span style="color:var(--stock-down)">失真：权重跑赢个股 -0.72%，赚指数不赚钱</span></p></div><div class="ds-profit-rating__figure"><div class="ds-profit-rating__figure-num" style="color:var(--stock-up)">⚠️ 指</div><div class="ds-profit-rating__figure-label">评级</div></div></div><div class="ds-card"><h3 class="ds-card__title">个股涨跌热力指标</h3><div class="ds-profit-heatgrid"><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="trending-up"></i>上涨个股数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="trending-down"></i>下跌个股数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="flame"></i>涨停家数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="snowflake"></i>跌停家数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-neu"><div class="ds-heat-cell__head"><i data-lucide="pie-chart"></i>上涨占比</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="gauge"></i>个股中位数</div><div class="ds-heat-cell__val">+0.11%</div><div class="ds-heat-cell__sub">全市场个股涨跌幅中位数</div></div></div></div><div class="ds-card"><h3 class="ds-card__title">个股 vs 权重（失真度对比）</h3><div class="ds-profit-distortion"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">个 股</div><div class="ds-statcard"><span class="ds-statcard__label">个股涨跌幅中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.11%</span></div></div><div class="ds-profit-distortion__scissor"><div class="lbl">指数失真剪刀差</div><div class="big" style="color:var(--stock-down)">-0.72%</div><span class="ds-tag ds-tag--warning">指数强</span><div class="lbl" style="margin-top:8px;letter-spacing:0.02em;text-transform:none">权重跑赢个股 -0.72%，赚指数不赚钱</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">权 重</div><div class="ds-statcard"><span class="ds-statcard__label">沪深300 加权指数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.83%</span></div></div></div></div></div>` },
    {
      id: "style",
      index: "03",
      title: "风格强弱排名",
      html: `
        <div class="ds-card">
          <h3 class="ds-card__title">最强 vs 最弱 — 今日涨跌幅对比</h3>
          <div class="relative" style="height:260px;">
            <canvas id="styleChart"></canvas>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>排名</th>
                <th>指数</th>
                <th class="num">今日涨跌幅</th>
                <th class="num">前日涨跌幅</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥇 最强</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-up)">+2.28%</td>
                <td class="num" style="color:var(--stock-up)">+0.45%</td>
                <td class="num" style="color:var(--stock-up)">+1.83pp</td>
                <td class="num">1,278亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥈 最强</span></td>
                <td>深证100</td>
                <td class="num" style="color:var(--stock-up)">+1.22%</td>
                <td class="num" style="color:var(--stock-down)">-0.59%</td>
                <td class="num" style="color:var(--stock-up)">+1.81pp</td>
                <td class="num">未披露</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥉 最强</span></td>
                <td>创业板50</td>
                <td class="num" style="color:var(--stock-up)">+0.88%</td>
                <td class="num" style="color:var(--stock-down)">-0.83%</td>
                <td class="num" style="color:var(--stock-up)">+1.71pp</td>
                <td class="num">未披露</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥇 最弱</span></td>
                <td>中证2000</td>
                <td class="num">盘中跌1.26%后反弹</td>
                <td class="num" style="color:var(--stock-up)">+1.2%</td>
                <td class="num">大幅震荡</td>
                <td class="num">未披露</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥈 最弱</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--stock-down)">-0.02%</td>
                <td class="num" style="color:var(--stock-up)">+0.31%</td>
                <td class="num" style="color:var(--stock-down)">-0.33pp</td>
                <td class="num">108亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥉 最弱</span></td>
                <td>恒生指数</td>
                <td class="num" style="color:var(--stock-up)">+0.15%</td>
                <td class="num" style="color:var(--stock-down)">-1.49%</td>
                <td class="num" style="color:var(--stock-up)">+1.64pp</td>
                <td class="num">1,412亿港元</td>
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
                  <th class="num">收盘价</th>
                  <th class="num">成交额</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-up)">+0.83%</td><td class="num">4,689.96</td><td class="num">4,711亿</td></tr>
                <tr><td>上证50</td><td class="num" style="color:var(--stock-up)">+0.80%</td><td class="num">2,943.39</td><td class="num">—</td></tr>
                <tr><td>上证180</td><td class="num" style="color:var(--stock-up)">+0.78%</td><td class="num">9,944.36</td><td class="num">—</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-up)">+1.31%</td><td class="num">14,295.08</td><td class="num">9,060亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)">+1.75%</td><td class="num">3,577.20</td><td class="num">4,470亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-up)">+1.15%</td><td class="num">7,919.52</td><td class="num">3,340亿</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-up)">+1.13%</td><td class="num">7,615.18</td><td class="num">—</td></tr>
                <tr><td>MSCI中国A50 CFD</td><td class="num" style="color:var(--stock-up)">+0.50%</td><td class="num">2,793.38</td><td class="num">—</td></tr>
                <tr><td>H股指数</td><td class="num" style="color:var(--stock-up)">+0.06%</td><td class="num">8,503.78</td><td class="num">—</td></tr>
                <tr><td>香港中小</td><td class="num" style="color:var(--stock-up)">+0.54%</td><td class="num">2,321.92</td><td class="num">—</td></tr>
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
            <div class="ds-alert__desc">昨日领跌的<b>科创50</b>（+0.45%）今日暴涨 <b>+2.28%</b>；昨日领涨的<b>中证2000</b>（+1.2%）今日盘中一度跌 <b>1.26%</b>。大小盘风格“一日游”切换明显。</div>
          </div>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "04",
      title: "流动性异动警报",
      html: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="ds-statcard" style="text-align:center;padding:24px;">
            <span class="ds-statcard__label">沪深两市合计成交额</span>
            <span class="ds-statcard__value" style="display:block;margin:10px 0;font-size:30px;">≈2.5万亿</span>
            <span class="ds-statcard__delta">
              <span>vs 前日 2.53万亿 · 微幅缩量</span>
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
            <div class="ds-alert__desc">成交额与昨日基本持平，但风格剧烈切换——资金从微盘/小盘大幅流出，涌入科创50、创业板指等成长权重。属典型的<b>存量博弈下的风格轮动</b>，而非增量入场。若后续成交无法持续放大至 <b>2.6万亿</b> 以上，反弹持续性存疑。</div>
          </div>
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
            <p class="text-[var(--text-default)] font-medium text-sm">市场风格180°逆转</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">成长权重暴力反弹：</strong>科创50 <span class="ds-tag ds-tag--success">+2.28%</span> 领涨，创业板指 <span class="ds-tag ds-tag--success">+1.75%</span> 同步大涨，“昨日温和即今日最强”特征明显。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">小微盘遭资金抛弃：</strong>中证2000盘中一度跌 <span class="ds-tag ds-tag--danger">1.26%</span>，北证50微跌 <span class="ds-tag ds-tag--danger">-0.02%</span>，风格从“小盘唱戏”急转至“权重搭台”。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="refresh-cw" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向逆转：</strong>昨日剪刀差 <span class="ds-tag ds-tag--success">+0.21%</span>（个股强于指数），今日剪刀差 <span class="ds-tag ds-tag--danger">-0.72%</span>（指数强于个股），赚钱效应从个股扩散转向权重集中。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                <span><strong class="text-[var(--text-default)]">成交额持平：</strong>约 <strong class="text-[var(--text-default)]">2.5万亿</strong>，属存量博弈下的风格轮动，非增量资金入场。</span>
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
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。风格切换频繁，追高风险较大。",
    generatedAt: "报告生成时间：2026-08-07"
  },
  charts: [
    // 1. divergenceChart — 中位数 vs 沪深300，前日(8/6) vs 今日(8/7)
    function (p) {
      var grayBar = "rgba(149,153,166,0.3)";
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/6)", "今日 (8/7)"],
          datasets: [
            { label: "中位数涨跌幅", data: [0.06, 0.11], backgroundColor: [grayBar, p.green], borderRadius: 6, barPercentage: 0.4 },
            { label: "沪深300涨跌幅", data: [-0.15, 0.83], backgroundColor: [p.red, p.green], borderRadius: 6, barPercentage: 0.4 }
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
          labels: ["科创50", "深证100", "创业板50", "中证2000(盘中)", "北证50", "恒生指数"],
          datasets: [{
            label: "今日涨跌幅",
            data: [2.28, 1.22, 0.88, -1.26, -0.02, 0.15],
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
    // 3. volumeChart — 成交额对比
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/6)", "今日 (8/7)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.53, 2.50],
            backgroundColor: ["rgba(149,153,166,0.3)", p.amber],
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
              min: 2.4,
              max: 2.6,
              ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "万亿"; } },
              grid: { color: p.gridColor }
            }
          }
        }
      };
    },
    // 4. allIndexChart — 主要指数今日涨跌幅一览
    function (p) {
      var nullColor = "rgba(149,153,166,0.3)";
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "深证成指", "中证500", "中证1000", "沪深300", "上证50", "上证180", "创业板50", "深证100", "香港中小", "MSCI A50", "恒生指数", "H股指数", "北证50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [2.28, 1.75, 1.31, 1.15, 1.13, 0.83, 0.80, 0.78, 0.88, 1.22, 0.54, 0.50, 0.15, 0.06, -0.02],
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
