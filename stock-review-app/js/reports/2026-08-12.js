/**
 * 2026-08-12.js — A-share close review report (migrated to Trae dark design system).
 * Source: A股收盘复盘报告_2026-08-12.html (light theme).
 * Structure mirrors the reference report in js/data.js (2026-08-20).
 */
window.REPORTS["2026-08-12"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-12",
    subtitle: "科技暴力反弹 · 防御遭抛弃 · 持仓跑输中位数",
    dateLabel: "2026-08-12"
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
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.83%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.46pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">📊 持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.68%</span>
            <span class="ds-statcard__delta">
              <span class="ds-statcard__caption">今日持仓表现</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.18%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.97pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.65%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.49pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">超额收益（持仓−中位数）</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.15%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>跑输全市场中位数</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--stock-up);font-size:var(--heading-sm-font-size)">🔥 强普涨</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--success">超3600只个股上涨</span>
              <span class="ds-statcard__caption">大幅回暖</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📊 中位数 vs 沪深300 vs 持仓收益 — 前日(8/11)与今日(8/12)对比</h3>
          <div class="relative" style="height:240px;">
            <canvas id="divergenceChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📊 持仓收益分析</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">您今日持仓收益 <b>+0.68%</b>，跑输全市场中位数 <b>+0.83%</b> 共 <b>0.15个百分点</b>，但跑赢沪深300（<b>+0.65%</b>）<b>0.03个百分点</b>，属中等偏上水平。建议检查持仓结构是否偏向防御或权重，若欲跟上市场平均涨幅，可适度增加成长/小盘暴露。</p>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">⚠️ 核心信号</div>
            <div class="ds-alert__desc">今日中位数 <b>+0.83%</b>，沪深300上涨 <b>+0.65%</b>，剪刀差由负转正至 <b>+0.18%</b>。个股表现略强于权重，结束了昨日"赚指数不赚钱"的格局。全市场超3600只个股上涨（占比约71%），赚钱效应显著回暖。</div>
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
          <h3 class="ds-card__title">🔄 关键指数：前日(8/11) vs 今日(8/12) — "昨日最弱即今日最强"</h3>
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
                <th class="num">前日涨跌幅(8/11)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥇 最强</span></td>
                <td><b>科创50</b></td>
                <td class="num" style="color:var(--stock-up)"><b>+2.09%</b></td>
                <td class="num" style="color:var(--stock-down)">-0.36%</td>
                <td class="num" style="color:var(--stock-up)">+2.45pp</td>
                <td class="num">约1,300亿(估算)</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥈 最强</span></td>
                <td><b>创业板指</b></td>
                <td class="num" style="color:var(--stock-up)"><b>+1.73%</b></td>
                <td class="num" style="color:var(--stock-down)">-0.73%</td>
                <td class="num" style="color:var(--stock-up)">+2.46pp</td>
                <td class="num">约4,400亿(估算)</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥉 最强</span></td>
                <td><b>中证1000</b></td>
                <td class="num" style="color:var(--stock-up)"><b>+1.37%</b></td>
                <td class="num" style="color:var(--stock-up)">+0.71%</td>
                <td class="num" style="color:var(--stock-up)">+0.66pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥇 最弱</span></td>
                <td><b>中证红利</b></td>
                <td class="num" style="color:var(--stock-down)"><b>-0.52%</b></td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥈 最弱</span></td>
                <td><b>恒生指数</b></td>
                <td class="num" style="color:var(--stock-down)"><b>-1.00%</b></td>
                <td class="num" style="color:var(--stock-up)">+1.05%</td>
                <td class="num" style="color:var(--stock-down)">-2.05pp</td>
                <td class="num">约1,170亿港元</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥉 最弱</span></td>
                <td><b>北证50</b></td>
                <td class="num" style="color:var(--stock-up)">+0.27%</td>
                <td class="num" style="color:var(--stock-down)">-1.00%</td>
                <td class="num" style="color:var(--stock-up)">+1.27pp</td>
                <td class="num">—</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-up)"><b>+0.32%</b></td><td class="num">3,946.51</td><td class="num">9,861亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-up)"><b>+1.25%</b></td><td class="num">14,438.07</td><td class="num">1.17万亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-up)"><b>+0.65%</b></td><td class="num">4,693.88</td><td class="num">3,749亿</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-up)"><b>+2.09%</b></td><td class="num">1,745.15</td><td class="num">约1,300亿(估算)</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)"><b>+1.73%</b></td><td class="num">3,610.65</td><td class="num">约4,400亿(估算)</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-up)"><b>+1.18%</b></td><td class="num">8,061.69</td><td class="num">—</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-up)"><b>+1.37%</b></td><td class="num">7,803.32</td><td class="num">—</td></tr>
                <tr><td>深证100</td><td class="num" style="color:var(--stock-up)"><b>+1.10%</b></td><td class="num">6,229.31</td><td class="num">—</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-up)"><b>+0.27%</b></td><td class="num">1,116.26</td><td class="num">—</td></tr>
                <tr><td>中证红利</td><td class="num" style="color:var(--stock-down)"><b>-0.52%</b></td><td class="num">5,502.44</td><td class="num">—</td></tr>
                <tr><td>同花顺全A(沪深京)</td><td class="num" style="color:var(--stock-up)"><b>+0.96%</b></td><td class="num">1,883.137</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="rocket" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">🚀 科技成长全线爆发</div>
            <div class="ds-alert__desc">昨日领跌的<b>科创50</b>（-0.36%）今日暴涨 <b>+2.09%</b>，<b>创业板指</b>（-0.73%）大涨 <b>+1.73%</b>——"昨日最弱即今日最强"特征再度上演。<b>中证红利</b>（-0.52%）成为今日唯一下跌的主要宽基指数，资金从防御板块大幅回流科技成长。恒生指数跌 <b>1.00%</b>，与A股走势背离。</div>
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
            <span class="ds-statcard__value" style="display:block;margin:10px 0;font-size:30px;color:var(--stock-down);">2.15万亿</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>缩量约3,900亿(-15.4%)</span>
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
            <div class="ds-alert__desc">成交额显著缩量，较前日减少约 <b>3,900亿</b>（-15.4%），连续两日缩量。<b>缩量 + 科技大涨 + 超3600股上涨</b>的组合，说明增量资金未入场，属存量资金从防御（红利）向科技成长迁徙；科技股上涨主要由存量调仓驱动，非新增资金推动。若成交持续在 <b>2.1万亿</b> 附近徘徊，科技反弹的持续性存疑。</div>
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
            <p class="text-[var(--text-default)] font-medium text-sm">🚀 科技成长暴力反弹，资金从防御切回进攻</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><b>科技板块全线爆发</b>：科创50大涨 <span class="ds-tag ds-tag--success">+2.09%</span> 领涨全场，CPO概念涨超 <span class="ds-tag ds-tag--success">5%</span>，光纤、半导体、通信设备、算力租赁等板块涨幅居前。永鼎股份、通鼎互联、通宇通讯等多股涨停。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><b>防御板块遭资金抛弃</b>：中证红利 <span class="ds-tag ds-tag--danger">-0.52%</span> 成为唯一下跌的主要宽基指数，油气、煤炭等传统防御板块持续调整。资金从"防御避险"急转至"进攻成长"。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="shuffle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                <span><b>指数失真方向逆转</b>：昨日剪刀差 <span class="ds-tag ds-tag--danger">-0.79%</span>（指数强于个股），今日剪刀差 <span class="ds-tag ds-tag--success">+0.18%</span>（个股略强于指数）——赚钱效应从"权重集中"回到"个股普涨"。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="pie-chart" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                <span><b>持仓收益跑输中位数</b>：您今日持仓收益 <span class="ds-tag ds-tag--success">+0.68%</span>，低于全市场中位数 <span class="ds-tag ds-tag--success">+0.83%</span>，超额为 <span class="ds-tag ds-tag--danger">-0.15%</span>。建议检查持仓结构是否偏向防御或权重，若欲跟上市场平均涨幅，可适度增加成长/小盘暴露。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-alert-default)"></i>
                <span><b>缩量反弹需警惕</b>：两市成交仅 <b>2.15万亿</b>，较前日缩量近 <b>4,000亿</b>，属典型的存量博弈下的风格轮动，而非增量资金入场。若后续成交无法持续放大，科技反弹持续性存疑。</span>
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
    disclaimer: "⚠️ 以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。持仓收益对比仅为客观展示，不构成操作建议。缩量背景下科技股大涨，属存量资金腾挪，追高需谨慎。",
    generatedAt: "报告生成时间：2026-08-12"
  },
  charts: [
    // 1. divergenceChart — 中位数 / 沪深300 / 持仓收益，前日 vs 今日
    function (p) {
      var nullColor = "rgba(149,153,166,0.3)";
      function bg(ctx) {
        var v = ctx.raw;
        return v === null || v === undefined ? nullColor : (v >= 0 ? p.green : p.red);
      }
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/11)", "今日 (8/12)"],
          datasets: [
            { label: "中位数涨跌幅", data: [-0.63, 0.83], backgroundColor: bg, borderRadius: 6, barPercentage: 0.25 },
            { label: "沪深300涨跌幅", data: [0.16, 0.65], backgroundColor: bg, borderRadius: 6, barPercentage: 0.25 },
            { label: "持仓收益率", data: [null, 0.68], backgroundColor: bg, borderRadius: 6, barPercentage: 0.25 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              displayColors: false,
              valueFmt: function (c) {
                return c.dataset.label + ": " + (c.parsed.y === null ? "无数据" : c.parsed.y.toFixed(2) + "%");
              }
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
          labels: ["科创50", "创业板指", "中证1000", "北证50", "中证红利", "恒生指数"],
          datasets: [{
            label: "今日涨跌幅",
            data: [2.09, 1.73, 1.37, 0.27, -0.52, -1.00],
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
      var nullColor = "rgba(149,153,166,0.3)";
      function bg(ctx) {
        var v = ctx.raw;
        return v === null || v === undefined ? nullColor : (v >= 0 ? p.green : p.red);
      }
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "中证红利", "恒生指数", "北证50"],
          datasets: [
            { label: "前日 (8/11)", data: [-0.36, -0.73, null, 1.05, -1.00], backgroundColor: bg, borderRadius: 5, barPercentage: 0.7 },
            { label: "今日 (8/12)", data: [2.09, 1.73, -0.52, -1.00, 0.27], backgroundColor: bg, borderRadius: 5, barPercentage: 0.7 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              displayColors: false,
              valueFmt: function (c) {
                return c.dataset.label + ": " + (c.parsed.y === null ? "无数据" : c.parsed.y.toFixed(2) + "%");
              }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
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
          labels: ["前日 (8/11)", "今日 (8/12)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.54, 2.15],
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
              min: 2.0,
              max: 2.7,
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
          labels: ["科创50", "创业板指", "中证1000", "深证成指", "中证500", "深证100", "同花顺全A", "沪深300", "上证指数", "北证50", "中证红利", "恒生指数"],
          datasets: [{
            label: "今日涨跌幅",
            data: [2.09, 1.73, 1.37, 1.25, 1.18, 1.10, 0.96, 0.65, 0.32, 0.27, -0.52, -1.00],
            backgroundColor: function (ctx) {
              var v = ctx.raw;
              if (v === null || v === undefined) return nullColor;
              return v >= 0 ? p.green : p.red;
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
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "%"; } }, grid: { color: p.gridColor } },
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 10 }, maxRotation: 45, minRotation: 35 }, grid: { display: false } }
          }
        }
      };
    }
  ]
};
