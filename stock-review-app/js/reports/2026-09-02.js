/**
 * 2026-09-02 — A股收盘复盘报告
 * 全线下挫，北证50独涨，军工逆势活跃
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-09-02"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-09-02",
    subtitle: "全线下挫，北证50独涨，军工逆势活跃",
    dateLabel: "2026-09-02"
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
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.03%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.47pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.79%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-2.98pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300 加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.38%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.57pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.35%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.90pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓超额收益</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.76%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.51pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">📉 极弱</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--danger">3901只下跌</span>
              <span class="ds-statcard__caption">上涨占比约28.3%</span>
            </span>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th class="num">今日（9/2）</th>
                <th class="num">前一日（8/31）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个股涨跌幅中位数</td>
                <td class="num" style="color:var(--stock-down)">-1.03%</td>
                <td class="num" style="color:var(--stock-up)">+0.44%</td>
                <td class="num" style="color:var(--stock-down)">-1.47pp</td>
              </tr>
              <tr>
                <td>加权指数（沪深300）</td>
                <td class="num" style="color:var(--stock-down)">-1.38%</td>
                <td class="num" style="color:var(--stock-down)">-0.81%</td>
                <td class="num" style="color:var(--stock-down)">-0.57pp</td>
              </tr>
              <tr>
                <td>指数失真剪刀差（中位数−加权）</td>
                <td class="num" style="color:var(--stock-up)">+0.35%</td>
                <td class="num" style="color:var(--stock-up)">+1.25%</td>
                <td class="num" style="color:var(--stock-down)">-0.90pp</td>
              </tr>
              <tr>
                <td>持仓收益率</td>
                <td class="num" style="color:var(--stock-down)">-1.79%</td>
                <td class="num" style="color:var(--stock-up)">+1.19%</td>
                <td class="num" style="color:var(--stock-down)">-2.98pp</td>
              </tr>
              <tr>
                <td>持仓收益 vs 中位数（超额）</td>
                <td class="num" style="color:var(--stock-down)">-0.76%</td>
                <td class="num" style="color:var(--stock-up)">+0.75%</td>
                <td class="num" style="color:var(--stock-down)">-1.51pp</td>
              </tr>
              <tr>
                <td>赚钱效应评级</td>
                <td>极弱（超3900只个股下跌）</td>
                <td>强普涨</td>
                <td style="color:var(--stock-down)">赚钱效应彻底崩塌</td>
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
            今日三大指数全线大跌。中位数<span class="num" style="color:var(--stock-down)">-1.03%</span>，沪深300跌<span class="num" style="color:var(--stock-down)">1.38%</span>，剪刀差为<span class="num" style="color:var(--stock-up)">+0.35%</span>，说明中小盘跌幅略小于权重。全市场超3900只个股下跌。您的持仓收益<span class="num" style="color:var(--stock-down)">-1.79%</span>，跑输全市场中位数0.76个百分点，较昨日<span class="num" style="color:var(--stock-up)">+1.19%</span>大幅回落2.98个百分点，超额收益由正转负，持仓结构今日承压。
          </p>
        </div>
      `
    },
    { id: "profit", index: "02", title: "赚钱效应分析", html: `<div class="ds-profit__stack"><div class="ds-profit-rating"><div class="ds-profit-rating__icon-wrap">📉</div><div class="ds-profit-rating__body"><div class="ds-profit-rating__title">📉 极弱</div><div class="ds-profit-rating__chips"><span class="ds-tag ds-tag--danger">弱势普跌</span><span class="ds-tag ds-tag--danger">⚠️ 个股抗跌 · 剪刀差 +0.35%</span></div><p class="ds-profit-rating__desc">全市场 <b>1,541</b> 只个股上涨 · <b>3,901</b> 只下跌 · <b>54</b> 家涨停 · <b>8</b> 家跌停 · 上涨占比约 <b>28.3%</b> · <span style="color:var(--stock-up)">失真：个股跑赢权重 +0.35%</span></p></div><div class="ds-profit-rating__figure"><div class="ds-profit-rating__figure-num" style="color:var(--stock-down)">28.3%</div><div class="ds-profit-rating__figure-label">上涨占比</div></div></div><div class="ds-card"><h3 class="ds-card__title">个股涨跌热力指标</h3><div class="ds-profit-heatgrid"><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="trending-up"></i>上涨个股数</div><div class="ds-heat-cell__val">1,541</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="trending-down"></i>下跌个股数</div><div class="ds-heat-cell__val">3,901</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="flame"></i>涨停家数</div><div class="ds-heat-cell__val">54</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="snowflake"></i>跌停家数</div><div class="ds-heat-cell__val">8</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="pie-chart"></i>上涨占比</div><div class="ds-heat-cell__val">28.3%</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="gauge"></i>个股中位数</div><div class="ds-heat-cell__val">-1.03%</div><div class="ds-heat-cell__sub">全市场个股涨跌幅中位数</div></div></div></div><div class="ds-card"><h3 class="ds-card__title">个股 vs 权重（失真度对比）</h3><div class="ds-profit-distortion"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">个 股</div><div class="ds-statcard"><span class="ds-statcard__label">个股涨跌幅中位数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-1.03%</span></div></div><div class="ds-profit-distortion__scissor"><div class="lbl">指数失真剪刀差</div><div class="big" style="color:var(--stock-up)">+0.35%</div><span class="ds-tag ds-tag--success">个股抗跌</span><div class="lbl" style="margin-top:8px;letter-spacing:0.02em;text-transform:none">中小盘跌幅略小于权重，剪刀差收窄</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">权 重</div><div class="ds-statcard"><span class="ds-statcard__label">沪深300 加权指数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-1.38%</span></div></div></div></div><div class="ds-card"><h3 class="ds-card__title">持仓 vs 市场（超额收益对比）</h3><div class="ds-profit-holding"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">持 仓</div><div class="ds-statcard"><span class="ds-statcard__label">持仓收益率</span><span class="ds-statcard__value" style="color:var(--stock-down)">-1.79%</span></div></div><div class="ds-profit-holding__excess"><div class="lbl">超 额 收 益</div><div class="num" style="color:var(--stock-down)">-0.76%</div><span class="ds-tag ds-tag--danger">跑输市场</span><div class="ds-heat-cell__sub" style="text-align:center">跑输市场（超额收益为负，持仓结构承压）</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">市 场</div><div class="ds-statcard"><span class="ds-statcard__label">全市场中位数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-1.03%</span></div></div></div><div class="ds-profit-holding__advice is-down">⚠️ 超额收益由昨日 +0.75% 急转至 -0.76%，单日波动达 1.51pp，超额收益由正转负，持仓结构今日承压。</div></div></div>` },
    {
      id: "style",
      index: "03",
      title: "风格强弱排名",
      html: `
        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[760px]">
            <thead>
              <tr>
                <th>排名</th>
                <th>指数</th>
                <th class="num">今日涨跌幅</th>
                <th class="num">前日涨跌幅（8/31）</th>
                <th class="num">环比（今日-前日）</th>
                <th class="num">今日收盘价</th>
                <th class="num">今日成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--stock-up)">+2.50%</td>
                <td class="num" style="color:var(--stock-up)">+0.14%</td>
                <td class="num" style="color:var(--stock-up)">+2.36pp</td>
                <td class="num">1,106.57</td>
                <td class="num">294亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>中证1000</td>
                <td class="num" style="color:var(--stock-down)">-1.40%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">7,583.76</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>沪深300</td>
                <td class="num" style="color:var(--stock-down)">-1.38%</td>
                <td class="num" style="color:var(--stock-down)">-0.81%</td>
                <td class="num" style="color:var(--stock-down)">-0.57pp</td>
                <td class="num">4,547.96</td>
                <td class="num">4,747亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-down)">-2.39%</td>
                <td class="num" style="color:var(--stock-up)">+0.42%</td>
                <td class="num" style="color:var(--stock-down)">-2.81pp</td>
                <td class="num">3,312.24</td>
                <td class="num">4,421亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>深证成指</td>
                <td class="num" style="color:var(--stock-down)">-1.88%</td>
                <td class="num" style="color:var(--stock-up)">+0.44%</td>
                <td class="num" style="color:var(--stock-down)">-2.32pp</td>
                <td class="num">13,611.55</td>
                <td class="num">9,558亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-down)">-1.82%</td>
                <td class="num" style="color:var(--stock-down)">-1.61%</td>
                <td class="num" style="color:var(--stock-down)">-0.21pp</td>
                <td class="num">1,617.60</td>
                <td class="num">643亿</td>
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
                  <th class="num">今日成交额</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-down)">-0.97%</td><td class="num">3,941.39</td><td class="num">8,354亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-down)">-1.88%</td><td class="num">13,611.55</td><td class="num">9,558亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-down)">-1.38%</td><td class="num">4,547.96</td><td class="num">4,747亿</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-down)">-1.82%</td><td class="num">1,617.60</td><td class="num">643亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-down)">-2.39%</td><td class="num">3,312.24</td><td class="num">4,421亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-down)">-1.65%</td><td class="num">7,729.23</td><td class="num">—</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-down)">-1.40%</td><td class="num">7,583.76</td><td class="num">—</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-up)">+2.50%</td><td class="num">1,106.57</td><td class="num">294亿</td></tr>
                <tr><td>科创综指</td><td class="num" style="color:var(--stock-down)">-1.37%</td><td class="num">1,906.64</td><td class="num">—</td></tr>
                <tr><td>中小板综</td><td class="num" style="color:var(--stock-down)">-1.16%</td><td class="num">14,419.58</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            北证50一枝独秀大涨<span class="num" style="color:var(--stock-up)">2.50%</span>，盘中一度涨超4%，近九成北交所个股上涨。创业板指大跌<span class="num" style="color:var(--stock-down)">2.39%</span>领跌全场，科创50跌<span class="num" style="color:var(--stock-down)">1.82%</span>。沪深300跌<span class="num" style="color:var(--stock-down)">1.38%</span>跑赢创业板指，权重股相对抗跌。北证50与创业板指形成极致分化，资金从成长权重流向微盘/北交所方向。
          </p>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "04",
      title: "流动性异动警报",
      html: `
        <div class="ds-alert">
          <div class="ds-alert__icon">
            <i data-lucide="trending-down" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">成交额显著缩量 普跌格局</div>
            <div class="ds-alert__desc">沪深两市合计约 1.79万亿，较前日缩量约 2,422亿（-11.9%），年内第11次跌破2万亿</div>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th>今日（9/2）</th>
                <th class="num">前一日（8/31）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>沪深两市合计成交额</td>
                <td>1.79万亿（沪0.84万亿/深0.96万亿）</td>
                <td class="num">约2.1万亿</td>
                <td class="num" style="color:var(--stock-down)">缩量约2,422亿（-11.9%）</td>
              </tr>
              <tr>
                <td>沪深北三市合计</td>
                <td>1.82万亿</td>
                <td class="num">—</td>
                <td class="num">—</td>
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
            成交额显著缩量，较前日减少约2,422亿，年内第11次跌破2万亿。缩量+普跌+超3900股下跌的组合，说明市场交投情绪极度低迷，缺乏增量资金入场；北证50逆势大涨但成交仅294亿，属存量资金在小微盘内部的腾挪，难以带动全局；若成交持续在1.8万亿以下徘徊，市场短期调整压力将进一步加大。
          </p>
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
            <p class="text-[var(--text-default)] font-medium text-sm">"全线下挫，北证50独涨，军工逆势活跃"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">三大指数集体收跌：</strong>上证指数跌0.97%报3941.39点，深证成指跌1.88%报13611.55点，创业板指大跌2.39%报3312.24点。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">北证50逆势大涨2.50%：</strong>北证50成为今日唯一上涨的宽基指数，盘中一度涨超4%，近九成北交所个股上涨。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="shield" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">军工板块逆势爆发：</strong>内蒙一机2连板，建设工业、博云新材、长城军工、晟楠科技涨停，军工装备板块涨幅居前。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">农业/煤炭板块重挫：</strong>粮食概念持续走弱，敦煌种业、国投丰乐触及跌停，神农种业跌超10%；煤炭板块高开低走，上海能源跌超7%。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向：</strong>今日剪刀差为+0.35%（中位数-1.03%，沪深300-1.38%），说明中小盘跌幅略小于权重，但剪刀差较前日（+1.25%）大幅收窄0.90个百分点。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现大幅回落：</strong>您今日持仓收益-1.79%，跑输全市场中位数0.76个百分点，超额收益由昨日+0.75%急转至-0.76%。在军工逆势走强、北证50大涨的背景下，持仓未能捕捉到这些结构性机会，建议关注持仓板块分布是否与当前市场风格匹配。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-triangle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">缩量信号需高度警惕：</strong>两市成交缩至1.79万亿，较前日缩量超2,400亿，年内第11次跌破2万亿。缩量+普跌说明市场做多意愿极弱，短期需关注是否出现止跌企稳信号。</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。市场持续缩量调整，北证50逆势大涨难以带动全局，建议保持谨慎，关注量能变化及军工等结构性机会的持续性。",
    generatedAt: "报告生成时间：2026-09-02"
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
              label: "今日（9/2）",
              data: [-1.03, -1.38, -1.79, 0.35],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            },
            {
              label: "前一日（8/31）",
              data: [0.44, -0.81, 1.19, 1.25],
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
          labels: ["北证50", "上证指数", "沪深300", "科创50", "深证成指", "创业板指"],
          datasets: [{
            label: "今日涨跌幅",
            data: [2.50, -0.97, -1.38, -1.82, -1.88, -2.39],
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
          labels: ["8/31", "9/2"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.10, 1.79],
            backgroundColor: [p.green, p.red],
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
