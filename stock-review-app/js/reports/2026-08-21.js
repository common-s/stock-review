/**
 * 2026-08-21 — A股收盘复盘报告
 * 创业板独领风骚，权重强于个股，成交持续萎缩
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-08-21"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-21",
    subtitle: "创业板独领风骚，权重强于个股，成交持续萎缩",
    dateLabel: "2026-08-21"
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
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.13%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.30pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300 加权指数</span>
            <span class="ds-statcard__value" style="color:var(--status-success-default)">+0.57%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.48pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.30%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.35pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.70%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.78pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓超额收益</span>
            <span class="ds-statcard__value" style="color:var(--status-error-default)">-0.17%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.05pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">指数强于个股</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--warning">2505涨/2862跌</span>
              <span class="ds-statcard__caption">赚钱效应46.67%</span>
            </span>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th class="num">今日（8/21）</th>
                <th class="num">前一日（8/20）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个股涨跌幅中位数</td>
                <td class="num" style="color:var(--status-error-default)">-0.13%</td>
                <td class="num" style="color:var(--status-success-default)">+0.17%</td>
                <td class="num" style="color:var(--status-error-default)">-0.30pp</td>
              </tr>
              <tr>
                <td>加权指数（沪深300）</td>
                <td class="num" style="color:var(--status-success-default)">+0.57%</td>
                <td class="num" style="color:var(--status-success-default)">+0.09%</td>
                <td class="num" style="color:var(--status-success-default)">+0.48pp</td>
              </tr>
              <tr>
                <td>指数失真剪刀差（中位数−加权）</td>
                <td class="num" style="color:var(--status-error-default)">-0.70%</td>
                <td class="num" style="color:var(--status-success-default)">+0.08%</td>
                <td class="num" style="color:var(--status-error-default)">-0.78pp</td>
              </tr>
              <tr>
                <td>持仓收益率</td>
                <td class="num" style="color:var(--status-error-default)">-0.30%</td>
                <td class="num" style="color:var(--status-success-default)">+0.05%</td>
                <td class="num" style="color:var(--status-error-default)">-0.35pp</td>
              </tr>
              <tr>
                <td>持仓收益 vs 中位数（超额）</td>
                <td class="num" style="color:var(--status-error-default)">-0.17%</td>
                <td class="num" style="color:var(--status-error-default)">-0.12%</td>
                <td class="num" style="color:var(--status-error-default)">-0.05pp</td>
              </tr>
              <tr>
                <td>赚钱效应评级</td>
                <td>指数强于个股（2505涨/2862跌，赚钱效应46.67%）</td>
                <td>弱普涨</td>
                <td style="color:var(--status-error-default)">赚钱效应转弱</td>
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
            今日中位数<span class="num" style="color:var(--status-error-default)">-0.13%</span>，但沪深300大涨<span class="num" style="color:var(--status-success-default)">0.57%</span>，剪刀差扩大至<span class="num" style="color:var(--status-error-default)">-0.70%</span>，说明权重股显著跑赢中小盘，属典型的"赚指数不赚钱"行情。您的持仓收益<span class="num" style="color:var(--status-error-default)">-0.30%</span>，跑输全市场中位数0.17个百分点，连续两日跑输市场平均，超额收益持续为负，需重点关注持仓结构是否偏向了今日表现弱势的中小盘/题材方向。
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
          <table class="ds-table min-w-[720px]">
            <thead>
              <tr>
                <th>排名</th>
                <th>指数</th>
                <th class="num">今日涨跌幅</th>
                <th class="num">前日涨跌幅（8/20）</th>
                <th class="num">环比（今日-前日）</th>
                <th class="num">今日收盘价</th>
                <th class="num">今日成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--status-success-default)">+1.43%</td>
                <td class="num" style="color:var(--status-success-default)">+0.64%</td>
                <td class="num" style="color:var(--status-success-default)">+0.79pp</td>
                <td class="num">3,545.58</td>
                <td class="num">4,914.5亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>深证成指</td>
                <td class="num" style="color:var(--status-success-default)">+0.87%</td>
                <td class="num" style="color:var(--status-success-default)">+0.59%</td>
                <td class="num" style="color:var(--status-success-default)">+0.28pp</td>
                <td class="num">14,094.17</td>
                <td class="num">9,958.4亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>沪深300</td>
                <td class="num" style="color:var(--status-success-default)">+0.57%</td>
                <td class="num" style="color:var(--status-success-default)">+0.09%</td>
                <td class="num" style="color:var(--status-success-default)">+0.48pp</td>
                <td class="num">4,618.90</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--status-error-default)">-0.57%</td>
                <td class="num" style="color:var(--status-error-default)">-0.06%</td>
                <td class="num" style="color:var(--status-error-default)">-0.51pp</td>
                <td class="num">1,075.38</td>
                <td class="num">131亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>中证500</td>
                <td class="num" style="color:var(--status-success-default)">+0.05%</td>
                <td class="num" style="color:var(--status-success-default)">+0.86%</td>
                <td class="num" style="color:var(--status-error-default)">-0.81pp</td>
                <td class="num">7,854.33</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--status-success-default)">+0.04%</td>
                <td class="num" style="color:var(--status-error-default)">-0.87%</td>
                <td class="num" style="color:var(--status-success-default)">+0.91pp</td>
                <td class="num">1,653.56</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--status-success-default)">+0.04%</td><td class="num">3,905.20</td><td class="num">8,834.2亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--status-success-default)">+0.87%</td><td class="num">14,094.17</td><td class="num">9,958.4亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--status-success-default)">+0.57%</td><td class="num">4,618.90</td><td class="num">—</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--status-success-default)">+0.04%</td><td class="num">1,653.56</td><td class="num">—</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--status-success-default)">+1.43%</td><td class="num">3,545.58</td><td class="num">4,914.5亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--status-success-default)">+0.05%</td><td class="num">7,854.33</td><td class="num">—</td></tr>
                <tr><td>中证1000</td><td class="num">待核实</td><td class="num">—</td><td class="num">—</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--status-error-default)">-0.57%</td><td class="num">1,075.38</td><td class="num">131亿</td></tr>
                <tr><td>中证2000</td><td class="num" style="color:var(--status-success-default)">+1.56%</td><td class="num">3,084.59</td><td class="num">—</td></tr>
                <tr><td>恒生指数</td><td class="num" style="color:var(--status-success-default)">+1.21%</td><td class="num">26,009.46</td><td class="num">2,572.8亿港元</td></tr>
                <tr><td>恒生科技指数</td><td class="num" style="color:var(--status-success-default)">+1.40%</td><td class="num">4,766.16</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            创业板一枝独秀，北证50独自承压。创业板指大涨<span class="num" style="color:var(--status-success-default)">1.43%</span>领涨全场，深证成指（<span class="num" style="color:var(--status-success-default)">+0.87%</span>）和沪深300（<span class="num" style="color:var(--status-success-default)">+0.57%</span>）紧随其后。中证2000大涨<span class="num" style="color:var(--status-success-default)">1.56%</span>，但北证50独跌<span class="num" style="color:var(--status-error-default)">0.57%</span>，小微盘内部出现明显分化——小盘（中证2000）强于微盘（北证50）。科创50（<span class="num" style="color:var(--status-success-default)">+0.04%</span>）和上证指数（<span class="num" style="color:var(--status-success-default)">+0.04%</span>）几乎收平。恒生指数大涨<span class="num" style="color:var(--status-success-default)">1.21%</span>，重返26000点，与A股形成共振。
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
            <div class="ds-alert__title">成交额连续两日缩量</div>
            <div class="ds-alert__desc">沪深两市合计 1.88万亿，较前日缩量约 2,000亿（-9.6%），跌破1.9万亿关口</div>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th>今日（8/21）</th>
                <th class="num">前一日（8/20）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>沪深两市合计成交额</td>
                <td>1.88万亿（沪8834亿/深9958亿）</td>
                <td class="num">2.09万亿</td>
                <td class="num" style="color:var(--status-warning-default)">缩量约2,000亿（-9.6%）</td>
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
            成交额连续两日缩量，较前日再减约2,000亿，跌破1.9万亿关口。缩量+指数强于个股+超2800只个股下跌的组合，说明增量资金持续缺席，存量博弈特征愈发明显；资金集中流向创业板权重（宁德时代等），中小盘多数遭冷落；连续两日缩量（2.09万亿→1.88万亿），若成交持续萎缩至1.8万亿以下，市场短期反弹动能将严重不足。
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
            <p class="text-[var(--text-default)] font-medium text-sm">"创业板独领风骚，权重强于个股，成交持续萎缩"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-success-default)"></i>
                <span><strong class="text-[var(--text-default)]">创业板强势领涨：</strong>创业板指大涨1.43%领涨主要指数，贵金属、能源金属、工业金属等板块涨幅居前。湖南白银涨停，赤峰黄金、晓程科技涨幅居前。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-error-default)"></i>
                <span><strong class="text-[var(--text-default)]">防御板块大幅回调：</strong>粮食概念板块大幅回调，京粮控股、万向德农触及跌停；创新药板块低迷，哈三联、哈药股份触及跌停；医药生物（-3.48%）和农林牧渔（-2.51%）跌幅靠前。市场呈现"周期资源涨、消费医药跌"的分化格局。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向延续：</strong>昨日剪刀差+0.08%（个股略强于权重），今日剪刀差扩大至-0.70%（指数强于个股），赚钱效应从"弱普涨"转为"赚指数不赚钱"。市场呈现"权重搭台、题材回调"格局。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现持续落后：</strong>您今日持仓收益-0.30%，跑输全市场中位数0.17个百分点，连续两日跑输市场平均。在创业板大涨1.43%、沪深300涨0.57%的背景下，持仓收益为负，推测持仓中可能偏向了今日表现弱势的板块（如创新药、粮食概念、中小盘等）。建议审视持仓结构是否与市场风格（权重/资源）匹配。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-triangle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">缩量信号需高度警惕：</strong>两市成交缩至1.88万亿，连续两日缩量，跌破1.9万亿。缩量+指数强于个股说明反弹力度有限，属存量资金在权重内部的腾挪，而非增量入场。若成交持续萎缩，市场存在进一步调整风险。</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。连续缩量背景下，市场存量博弈特征明显，风格切换频繁，建议关注量能变化及持仓结构优化。",
    generatedAt: "报告生成时间：2026-08-21"
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
              label: "今日（8/21）",
              data: [-0.13, 0.57, -0.30, -0.70],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            },
            {
              label: "前一日（8/20）",
              data: [0.17, 0.09, 0.05, 0.08],
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
          labels: ["创业板指", "深证成指", "沪深300", "中证500", "科创50", "北证50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.43, 0.87, 0.57, 0.05, 0.04, -0.57],
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
          labels: ["8/20", "8/21"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.09, 1.88],
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
