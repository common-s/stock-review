/**
 * data.js — report archive data.
 * - DATES: timeline metadata (sorted newest first).
 * - REPORTS: full content for dates that have been migrated to the new design.
 *   Each report = { header, sections:[{id,index,title,html}], footer, charts:[fn] }.
 * Dates without a migrated report render an elegant empty state in the panel.
 * Chart configs are functions receiving a runtime palette (resolved from CSS
 * vars in app.js) and returning a Chart.js config — keeps data self-contained.
 */
window.DATES = [
  { date: "2026-08-25", subtitle: "4200股上涨却跑输大盘 · 权重搭台小盘唱戏" },
  { date: "2026-08-21", subtitle: "创业板独领风骚 · 权重强于个股" },
  { date: "2026-08-20", subtitle: "缩量普涨修复 · 医药黄金领衔" },
  { date: "2026-08-19", subtitle: "系统性暴跌 · 科技股重灾区" },
  { date: "2026-08-18", subtitle: "科创独涨 · 小盘领跌" },
  { date: "2026-08-17", subtitle: "科创领涨全场 · 量价齐升" },
  { date: "2026-08-14", subtitle: "创业板独领风骚 · 科创逆势独跌" },
  { date: "2026-08-13", subtitle: "全线普跌 · 放量下杀" },
  { date: "2026-08-12", subtitle: "科技暴力反弹 · 防御遭抛弃" },
  { date: "2026-08-11", subtitle: "赚指数不赚钱 · 中位数为负" },
  { date: "2026-08-10", subtitle: "风格再度逆转 · 成长遭抛售" },
  { date: "2026-08-07", subtitle: "风格180°逆转 · 权重搭台" }
];

window.REPORTS = {
  "2026-08-20": {
    header: {
      tag: "A股",
      title: "收盘复盘 · 2026-08-20",
      subtitle: "缩量普涨修复，医药黄金领衔，超跌中小盘弹性释放",
      dateLabel: "2026-08-20"
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
              <span class="ds-statcard__value" style="color:var(--stock-up)">+0.17%</span>
              <span class="ds-statcard__delta is-up">
                <i data-lucide="arrow-up" class="w-3 h-3"></i>
                <span>+4.10pp</span>
                <span class="ds-statcard__caption">较前日</span>
              </span>
            </div>
            <div class="ds-statcard">
              <span class="ds-statcard__label">持仓收益率</span>
              <span class="ds-statcard__value" style="color:var(--stock-up)">+0.05%</span>
              <span class="ds-statcard__delta is-up">
                <i data-lucide="arrow-up" class="w-3 h-3"></i>
                <span>+5.68pp</span>
                <span class="ds-statcard__caption">较前日</span>
              </span>
            </div>
            <div class="ds-statcard">
              <span class="ds-statcard__label">沪深300 加权指数</span>
              <span class="ds-statcard__value" style="color:var(--stock-up)">+0.09%</span>
              <span class="ds-statcard__delta is-up">
                <i data-lucide="arrow-up" class="w-3 h-3"></i>
                <span>+2.99pp</span>
                <span class="ds-statcard__caption">较前日</span>
              </span>
            </div>
            <div class="ds-statcard">
              <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
              <span class="ds-statcard__value" style="color:var(--stock-up)">+0.08%</span>
              <span class="ds-statcard__delta is-up">
                <i data-lucide="arrow-up" class="w-3 h-3"></i>
                <span>+1.11pp</span>
                <span class="ds-statcard__caption">较前日</span>
              </span>
            </div>
            <div class="ds-statcard">
              <span class="ds-statcard__label">持仓超额收益</span>
              <span class="ds-statcard__value" style="color:var(--stock-down)">-0.12%</span>
              <span class="ds-statcard__delta is-up">
                <i data-lucide="arrow-up" class="w-3 h-3"></i>
                <span>+1.58pp</span>
                <span class="ds-statcard__caption">较前日</span>
              </span>
            </div>
            <div class="ds-statcard">
              <span class="ds-statcard__label">赚钱效应评级</span>
              <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">弱普涨</span>
              <span class="ds-statcard__delta">
                <span class="ds-tag ds-tag--success">近4100只上涨</span>
                <span class="ds-statcard__caption">占比约75%</span>
              </span>
            </div>
          </div>

          <div class="ds-table-wrap overflow-x-auto">
            <table class="ds-table min-w-[680px]">
              <thead>
                <tr>
                  <th>指标</th>
                  <th class="num">今日（8/20）</th>
                  <th class="num">前一日（8/19）</th>
                  <th class="num">环比变化</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>个股涨跌幅中位数</td>
                  <td class="num" style="color:var(--stock-up)">+0.17%</td>
                  <td class="num" style="color:var(--stock-down)">-3.93%</td>
                  <td class="num" style="color:var(--stock-up)">+4.10pp</td>
                </tr>
                <tr>
                  <td>加权指数（沪深300）</td>
                  <td class="num" style="color:var(--stock-up)">+0.09%</td>
                  <td class="num" style="color:var(--stock-down)">-2.90%</td>
                  <td class="num" style="color:var(--stock-up)">+2.99pp</td>
                </tr>
                <tr>
                  <td>指数失真剪刀差（中位数−加权）</td>
                  <td class="num" style="color:var(--stock-up)">+0.08%</td>
                  <td class="num" style="color:var(--stock-down)">-1.03%</td>
                  <td class="num" style="color:var(--stock-up)">+1.11pp</td>
                </tr>
                <tr>
                  <td>持仓收益率</td>
                  <td class="num" style="color:var(--stock-up)">+0.05%</td>
                  <td class="num" style="color:var(--stock-down)">-5.63%</td>
                  <td class="num" style="color:var(--stock-up)">+5.68pp</td>
                </tr>
                <tr>
                  <td>持仓收益 vs 中位数（超额）</td>
                  <td class="num" style="color:var(--stock-down)">-0.12%</td>
                  <td class="num" style="color:var(--stock-down)">-1.70%</td>
                  <td class="num" style="color:var(--stock-up)">+1.58pp</td>
                </tr>
                <tr>
                  <td>赚钱效应评级</td>
                  <td>弱普涨（近4100只个股上涨，上涨占比约75%）</td>
                  <td>极弱</td>
                  <td style="color:var(--stock-up)">赚钱效应显著修复</td>
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
              今日市场迎来缩量普涨修复。中位数<span class="num" style="color:var(--stock-up)">+0.17%</span>，沪深300微涨<span class="num" style="color:var(--stock-up)">0.09%</span>，剪刀差为<span class="num" style="color:var(--stock-up)">+0.08%</span>，说明个股与权重基本同步。全市场近4100只个股上涨，赚钱效应较昨日的极端普跌（仅449只上涨）显著回暖。您的持仓收益<span class="num" style="color:var(--stock-up)">+0.05%</span>，跑输全市场中位数0.12个百分点，但较昨日<span class="num" style="color:var(--stock-down)">-5.63%</span>已有大幅修复，超额收益由负（<span class="num" style="color:var(--stock-down)">-1.70%</span>）收窄至<span class="num" style="color:var(--stock-down)">-0.12%</span>。
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
                  <th class="num">前日涨跌幅（8/19）</th>
                  <th class="num">环比（今日-前日）</th>
                  <th class="num">今日收盘价</th>
                  <th class="num">今日成交额</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="ds-tag ds-tag--success">最强</span></td>
                  <td>中证1000</td>
                  <td class="num" style="color:var(--stock-up)">+0.96%</td>
                  <td class="num" style="color:var(--stock-down)">-5.39%</td>
                  <td class="num" style="color:var(--stock-up)">+6.35pp</td>
                  <td class="num">7,589.78</td>
                  <td class="num">—</td>
                </tr>
                <tr>
                  <td><span class="ds-tag ds-tag--success">最强</span></td>
                  <td>中证500</td>
                  <td class="num" style="color:var(--stock-up)">+0.86%</td>
                  <td class="num" style="color:var(--stock-down)">-4.81%</td>
                  <td class="num" style="color:var(--stock-up)">+5.67pp</td>
                  <td class="num">7,850.40</td>
                  <td class="num">—</td>
                </tr>
                <tr>
                  <td><span class="ds-tag ds-tag--success">最强</span></td>
                  <td>创业板指</td>
                  <td class="num" style="color:var(--stock-up)">+0.64%</td>
                  <td class="num" style="color:var(--stock-down)">-6.26%</td>
                  <td class="num" style="color:var(--stock-up)">+6.90pp</td>
                  <td class="num">3,495.59</td>
                  <td class="num">5,260亿</td>
                </tr>
                <tr>
                  <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                  <td>科创50</td>
                  <td class="num" style="color:var(--stock-down)">-0.87%</td>
                  <td class="num" style="color:var(--stock-down)">-6.89%</td>
                  <td class="num" style="color:var(--stock-up)">+6.02pp</td>
                  <td class="num">1,652.97</td>
                  <td class="num">—</td>
                </tr>
                <tr>
                  <td><span class="ds-tag ds-tag--warning">最弱</span></td>
                  <td>北证50</td>
                  <td class="num" style="color:var(--stock-down)">-0.06%</td>
                  <td class="num" style="color:var(--stock-down)">-4.89%</td>
                  <td class="num" style="color:var(--stock-up)">+4.83pp</td>
                  <td class="num">1,081.58</td>
                  <td class="num">—</td>
                </tr>
                <tr>
                  <td><span class="ds-tag ds-tag--warning">最弱</span></td>
                  <td>沪深300</td>
                  <td class="num" style="color:var(--stock-up)">+0.09%</td>
                  <td class="num" style="color:var(--stock-down)">-2.90%</td>
                  <td class="num" style="color:var(--stock-up)">+2.99pp</td>
                  <td class="num">4,592.75</td>
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
                  <tr><td>上证指数</td><td class="num" style="color:var(--stock-up)">+0.24%</td><td class="num">3,903.72</td><td class="num">10,186亿</td></tr>
                  <tr><td>深证成指</td><td class="num" style="color:var(--stock-up)">+0.59%</td><td class="num">13,972.78</td><td class="num">10,608亿</td></tr>
                  <tr><td>沪深300</td><td class="num" style="color:var(--stock-up)">+0.09%</td><td class="num">4,592.75</td><td class="num">—</td></tr>
                  <tr><td>科创50</td><td class="num" style="color:var(--stock-down)">-0.87%</td><td class="num">1,652.97</td><td class="num">—</td></tr>
                  <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)">+0.64%</td><td class="num">3,495.59</td><td class="num">5,260亿</td></tr>
                  <tr><td>中证500</td><td class="num" style="color:var(--stock-up)">+0.86%</td><td class="num">7,850.40</td><td class="num">—</td></tr>
                  <tr><td>中证1000</td><td class="num" style="color:var(--stock-up)">+0.96%</td><td class="num">7,589.78</td><td class="num">—</td></tr>
                  <tr><td>北证50</td><td class="num" style="color:var(--stock-down)">-0.06%</td><td class="num">1,081.58</td><td class="num">—</td></tr>
                  <tr><td>恒生指数</td><td class="num" style="color:var(--stock-up)">+1.05%</td><td class="num">25,763</td><td class="num">2,245亿港元</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="ds-card">
            <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
              中小盘明显强于大盘——中证1000（<span class="num" style="color:var(--stock-up)">+0.96%</span>）和中证500（<span class="num" style="color:var(--stock-up)">+0.86%</span>）领涨，反映超跌后中小盘弹性更大。科创50（<span class="num" style="color:var(--stock-down)">-0.87%</span>）逆势独跌，是今日唯一下跌的主要宽基指数，半导体硅片、半导体材料等相关概念股下挫。恒生指数大涨<span class="num" style="color:var(--stock-up)">1.05%</span>，与A股形成共振。
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
              <div class="ds-alert__title">成交额显著缩量</div>
              <div class="ds-alert__desc">沪深两市合计 2.09万亿，较前日缩量约 4,361亿（-17.2%）</div>
            </div>
          </div>

          <div class="ds-table-wrap overflow-x-auto">
            <table class="ds-table min-w-[680px]">
              <thead>
                <tr>
                  <th>指标</th>
                  <th>今日（8/20）</th>
                  <th class="num">前一日（8/19）</th>
                  <th class="num">环比变化</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>沪深两市合计成交额</td>
                  <td>2.09万亿（沪1.02万亿/深1.07万亿）</td>
                  <td class="num">2.53万亿</td>
                  <td class="num" style="color:var(--status-warning-default)">缩量约4,361亿（-17.2%）</td>
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
              成交额显著缩量，较前日减少约4,361亿，缩量幅度超17%。缩量+普涨+近4100股上涨的组合，说明恐慌性抛售已基本结束，市场进入缩量修复阶段；增量资金仍未大规模入场，属存量资金的自发反弹；医药生物、贵金属等题材板块成为反弹主力，但量能不足以支撑全面持续上攻。历史上急跌后的缩量反弹，常伴随二次探底风险，需关注后续能否补量确认底部。
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
              <p class="text-[var(--text-default)] font-medium text-sm">"缩量普涨修复，医药黄金领衔，超跌中小盘弹性释放"</p>
              <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li class="flex gap-3">
                  <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                  <span><strong class="text-[var(--text-default)]">医药板块全面爆发：</strong>生物疫苗板块掀涨停潮，石药创新、康希诺、智飞生物等20cm涨停。消息面上，默沙东和莫德纳的mRNA皮肤癌疫苗在最后阶段临床试验取得积极结果，被专家视为"重大突破"。</span>
                </li>
                <li class="flex gap-3">
                  <i data-lucide="circle-dollar-sign" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                  <span><strong class="text-[var(--text-default)]">贵金属板块大涨：</strong>国际金价一度冲破4500美元，山东黄金涨超8%，赤峰黄金涨超7%。美债收益率下跌、美元走低推动金价大涨。</span>
                </li>
                <li class="flex gap-3">
                  <i data-lucide="building-2" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                  <span><strong class="text-[var(--text-default)]">房地产午后异动：</strong>上海出台楼市"沪八条"，城投控股2秒钟直线涨停，京投发展、福星股份等多股跟涨。</span>
                </li>
                <li class="flex gap-3">
                  <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                  <span><strong class="text-[var(--text-default)]">宇树科技继续大跌：</strong>上市次日跌超18%，收报687元。</span>
                </li>
                <li class="flex gap-3">
                  <i data-lucide="zap" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                  <span><strong class="text-[var(--text-default)]">超跌中小盘弹性释放：</strong>昨日跌幅最大的中证1000（-5.39%）和创业板指（-6.26%）今日反弹力度最强，"昨日最弱即今日最强"特征明显。</span>
                </li>
                <li class="flex gap-3">
                  <i data-lucide="pie-chart" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                  <span><strong class="text-[var(--text-default)]">持仓收益小幅跑输中位数：</strong>您今日持仓收益+0.05%，略低于全市场中位数+0.17%，超额为-0.12%，较昨日的-1.70%已大幅收窄。持仓修复力度略弱于市场平均，建议关注持仓中是否仍持有昨日跌幅较大、今日反弹乏力的品种。</span>
                </li>
                <li class="flex gap-3">
                  <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-alert-default)"></i>
                  <span><strong class="text-[var(--text-default)]">缩量反弹信号需警惕：</strong>两市成交缩至2.09万亿，较前日缩量超4,300亿。缩量+普涨说明反弹力度有限，属急跌后的技术性修复，而非趋势反转。若后续成交无法有效放大至2.3万亿以上，市场存在二次探底可能。</span>
                </li>
              </ul>
            </div>
          </div>
        `
      }
    ],
    footer: {
      disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。缩量反弹后市场仍存在不确定性，建议关注后续量能变化及政策面动向。",
      generatedAt: "报告生成时间：2026-08-20"
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
                label: "今日（8/20）",
                data: [0.17, 0.09, 0.05, 0.08],
                backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
                borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
              },
              {
                label: "前一日（8/19）",
                data: [-3.93, -2.90, -5.63, -1.03],
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
            labels: ["中证1000", "中证500", "创业板指", "沪深300", "北证50", "科创50"],
            datasets: [{
              label: "今日涨跌幅",
              data: [0.96, 0.86, 0.64, 0.09, -0.06, -0.87],
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
            labels: ["8/19", "8/20"],
            datasets: [{
              label: "成交额（万亿）",
              data: [2.53, 2.09],
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
  }
};
