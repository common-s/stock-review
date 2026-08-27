/**
 * 2026-08-13.js — A-share close review report (migrated to Trae dark design system).
 * Source: A股收盘复盘报告_2026-08-13.html (light theme).
 * Structure mirrors the reference report in js/data.js (2026-08-20).
 */
window.REPORTS["2026-08-13"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-13",
    subtitle: "全线普跌 · 放量下杀 · 持仓逆市正收益",
    dateLabel: "2026-08-13"
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
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.48%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-2.31pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">📊 持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.21%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.47pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.91%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.09pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.57%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-1.22pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">超额收益（持仓−中位数）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.69%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.84pp</span>
              <span class="ds-statcard__caption">vs 前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--stock-down);font-size:var(--heading-sm-font-size)">🧊 极弱</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--danger">超4300只个股下跌</span>
              <span class="ds-statcard__caption">下跌占比约79%</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📊 中位数 vs 沪深300 vs 持仓收益 — 前日(8/12)与今日(8/13)对比</h3>
          <div class="relative" style="height:240px;">
            <canvas id="divergenceChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">📊 持仓收益分析</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            您今日持仓收益 <strong class="num" style="color:var(--stock-up)">+0.21%</strong>，在市场普跌、中位数 <strong class="num" style="color:var(--stock-down)">-1.48%</strong> 的背景下，大幅跑赢全市场中位数 <strong class="num">1.69个百分点</strong>，超额收益极为显著。同时跑赢沪深300（<strong class="num" style="color:var(--stock-down)">-0.57%</strong>）<strong class="num">0.78个百分点</strong>，说明持仓结构明显优于市场平均水平，防御能力突出。
          </p>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">⚠️ 核心信号</div>
            <div class="ds-alert__desc">
              今日中位数 <strong class="num" style="color:var(--stock-down)">-1.48%</strong>，沪深300下跌 <strong class="num" style="color:var(--stock-down)">-0.57%</strong>，剪刀差 <strong class="num" style="color:var(--stock-down)">-0.91%</strong>。权重股相对抗跌，中小盘跌幅更大。全市场超 <strong class="num">4300只</strong> 个股下跌（占比约 <strong class="num">79%</strong>），属典型的普跌行情，赚钱效应彻底崩塌。
            </div>
          </div>
        </div>
      `
    },
    { id: "profit", index: "02", title: "赚钱效应分析", html: `<div class="ds-profit__stack"><div class="ds-profit-rating"><div class="ds-profit-rating__icon-wrap">🚨</div><div class="ds-profit-rating__body"><div class="ds-profit-rating__title">🧊 极弱</div><div class="ds-profit-rating__chips"><span class="ds-tag ds-tag--danger">极弱市况</span><span class="ds-tag ds-tag--warning">💡 指数强 · 剪刀差 -0.91%</span></div><p class="ds-profit-rating__desc"><span style="color:var(--stock-down)">失真：权重跑赢个股 -0.91%，赚指数不赚钱</span></p></div><div class="ds-profit-rating__figure"><div class="ds-profit-rating__figure-num" style="color:var(--stock-up)">🧊 极弱</div><div class="ds-profit-rating__figure-label">评级</div></div></div><div class="ds-card"><h3 class="ds-card__title">个股涨跌热力指标</h3><div class="ds-profit-heatgrid"><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="trending-up"></i>上涨个股数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="trending-down"></i>下跌个股数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="flame"></i>涨停家数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="snowflake"></i>跌停家数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-neu"><div class="ds-heat-cell__head"><i data-lucide="pie-chart"></i>上涨占比</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="gauge"></i>个股中位数</div><div class="ds-heat-cell__val">-1.48%</div><div class="ds-heat-cell__sub">全市场个股涨跌幅中位数</div></div></div></div><div class="ds-card"><h3 class="ds-card__title">个股 vs 权重（失真度对比）</h3><div class="ds-profit-distortion"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">个 股</div><div class="ds-statcard"><span class="ds-statcard__label">个股涨跌幅中位数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-1.48%</span></div></div><div class="ds-profit-distortion__scissor"><div class="lbl">指数失真剪刀差</div><div class="big" style="color:var(--stock-down)">-0.91%</div><span class="ds-tag ds-tag--warning">指数强</span><div class="lbl" style="margin-top:8px;letter-spacing:0.02em;text-transform:none">权重跑赢个股 -0.91%，赚指数不赚钱</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">权 重</div><div class="ds-statcard"><span class="ds-statcard__label">沪深300 加权指数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-0.57%</span></div></div></div></div><div class="ds-card"><h3 class="ds-card__title">持仓 vs 市场（超额收益对比）</h3><div class="ds-profit-holding"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">持 仓</div><div class="ds-statcard"><span class="ds-statcard__label">持仓收益率</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.21%</span></div></div><div class="ds-profit-holding__excess"><div class="lbl">超 额 收 益</div><div class="num" style="color:var(--stock-up)">+1.69%</div><span class="ds-tag ds-tag--success">跑赢市场</span><div class="ds-heat-cell__sub" style="text-align:center">跑赢市场（超额收益为正，持仓契合市场最强方向）</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">市 场</div><div class="ds-statcard"><span class="ds-statcard__label">全市场中位数</span><span class="ds-statcard__value" style="color:var(--stock-down)">-1.48%</span></div></div></div><div class="ds-profit-holding__advice is-up">💡 超额收益连续显著为正，持仓结构与市场最强方向高度契合，可考虑适度沿用当前结构。</div></div></div>` },
    {
      id: "style",
      index: "03",
      title: "风格强弱排名",
      html: `
        <div class="ds-card">
          <h3 class="ds-card__title">🥇 最强(相对抗跌) vs 🥉 最弱(跌幅最大) — 今日涨跌幅对比</h3>
          <div class="relative" style="height:260px;">
            <canvas id="styleChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">🔄 关键指数：前日(8/12) vs 今日(8/13) — "昨日最强即今日最弱"</h3>
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
                <th class="num">前日涨跌幅(8/12)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥇 最强</span></td>
                <td><strong>创业板指</strong></td>
                <td class="num" style="color:var(--stock-down)"><strong>-0.45%</strong></td>
                <td class="num" style="color:var(--stock-up)">+1.73%</td>
                <td class="num" style="color:var(--stock-down)">-2.18pp</td>
                <td class="num">6,615亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥈 最强</span></td>
                <td><strong>上证指数</strong></td>
                <td class="num" style="color:var(--stock-down)"><strong>-0.50%</strong></td>
                <td class="num" style="color:var(--stock-up)">+0.32%</td>
                <td class="num" style="color:var(--stock-down)">-0.82pp</td>
                <td class="num">1.16万亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">🥉 最强</span></td>
                <td><strong>沪深300</strong></td>
                <td class="num" style="color:var(--stock-down)"><strong>-0.57%</strong></td>
                <td class="num" style="color:var(--stock-up)">+0.65%</td>
                <td class="num" style="color:var(--stock-down)">-1.22pp</td>
                <td class="num">6,907亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥇 最弱</span></td>
                <td><strong>北证50</strong></td>
                <td class="num" style="color:var(--stock-down)"><strong>-1.62%</strong></td>
                <td class="num" style="color:var(--stock-up)">+0.27%</td>
                <td class="num" style="color:var(--stock-down)">-1.89pp</td>
                <td class="num">172亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥈 最弱</span></td>
                <td><strong>科创50</strong></td>
                <td class="num" style="color:var(--stock-down)"><strong>-1.11%</strong></td>
                <td class="num" style="color:var(--stock-up)">+2.09%</td>
                <td class="num" style="color:var(--stock-down)">-3.20pp</td>
                <td class="num">1,257亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">🥉 最弱</span></td>
                <td><strong>国证2000</strong></td>
                <td class="num" style="color:var(--stock-down)"><strong>-1.07%</strong></td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">7,558亿</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-down)"><strong>-0.50%</strong></td><td class="num">3,926.96</td><td class="num">1.16万亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-down)"><strong>-0.87%</strong></td><td class="num">14,289.44</td><td class="num">1.39万亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-down)"><strong>-0.57%</strong></td><td class="num">4,663.95</td><td class="num">6,907亿</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-down)"><strong>-1.11%</strong></td><td class="num">1,717.75</td><td class="num">1,257亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-down)"><strong>-0.45%</strong></td><td class="num">3,586.04</td><td class="num">6,615亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-down)"><strong>-0.96%</strong></td><td class="num">7,968.38</td><td class="num">4,970亿</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-down)"><strong>-1.00%</strong></td><td class="num">7,715.89</td><td class="num">5,648亿</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-down)"><strong>-1.62%</strong></td><td class="num">1,097.80</td><td class="num">172亿</td></tr>
                <tr><td>国证2000</td><td class="num" style="color:var(--stock-down)"><strong>-1.07%</strong></td><td class="num">10,036.35</td><td class="num">7,558亿</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="shield" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">🛡️ 全线下跌，大盘股相对抗跌</div>
            <div class="ds-alert__desc">
              今日A股主要宽基指数<strong>全线下跌</strong>。创业板指（<strong class="num" style="color:var(--stock-down)">-0.45%</strong>）跌幅最小，北证50（<strong class="num" style="color:var(--stock-down)">-1.62%</strong>）跌幅最大。大盘股表现优于中小盘，市场风格偏向蓝筹。昨日领涨的<strong>科创50</strong>（<strong class="num" style="color:var(--stock-up)">+2.09%</strong>）今日大跌 <strong class="num" style="color:var(--stock-down)">-1.11%</strong>——"昨日最强即今日最弱"特征再度上演。
            </div>
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
          <div class="ds-statcard" style="align-items:center;text-align:center;justify-content:center;">
            <span class="ds-statcard__label">沪深两市合计成交额</span>
            <span class="ds-statcard__value" style="font-size:30px;">2.57万亿</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>放量约4,200亿(+19.5%)</span>
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
            <div class="ds-alert__desc">
              成交额显著放量，较前日增加约 <strong class="num">4,200亿</strong>（<strong class="num" style="color:var(--stock-up)">+19.5%</strong>）。<strong>放量 + 普跌 + 超4300股下跌</strong>的组合，说明恐慌性抛盘涌出，属于放量下跌；增量资金未入场，而是存量资金在加速出逃。权重股相对抗跌（创业板指仅跌0.45%），中小盘跌幅更大（北证50跌1.62%），资金向大盘蓝筹避险迁移。放量下跌意味着短期抛压尚未释放完毕，需警惕次日继续调整的风险。
            </div>
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
            <p class="text-[var(--text-default)] font-medium text-sm">全线普跌，放量下杀，大盘相对抗跌</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">全线收跌：</strong>A股主要宽基指数全线下跌，超 <strong class="num">4300只</strong> 个股飘绿。三大指数高开后震荡，临近尾盘集体跳水翻绿。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="shield" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">大盘股相对抗跌：</strong>创业板指 <span class="ds-tag ds-tag--danger">-0.45%</span> 跌幅最小，北证50 <span class="ds-tag ds-tag--danger">-1.62%</span> 跌幅最大。大盘股表现优于中小盘，市场风格偏向蓝筹。科创50 <span class="ds-tag ds-tag--danger">-1.11%</span> 和中证1000 <span class="ds-tag ds-tag--danger">-1.00%</span> 跌幅居前，科技成长及中小盘股承压明显。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">医药、算力逆势走强：</strong>CRO概念、创新药板块爆发，算力租赁延续强势，CPO、光通信概念活跃。贵金属大跌（黄金股重挫）、教育、房地产、建材、汽车、石化等跌幅居前。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="shuffle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向：</strong>今日剪刀差 <span class="ds-tag ds-tag--danger">-0.91%</span>（中位数<strong class="num" style="color:var(--stock-down)">-1.48%</strong>，沪深300<strong class="num" style="color:var(--stock-down)">-0.57%</strong>），说明权重股相对抗跌，中小盘跌幅更大，市场呈现"权重抗跌、小盘重挫"格局。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="pie-chart" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现优异：</strong>您今日持仓收益 <span class="ds-tag ds-tag--success">+0.21%</span>，在市场普跌、中位数 <span class="ds-tag ds-tag--danger">-1.48%</span> 的背景下，跑赢中位数 <strong class="num">1.69个百分点</strong>，超额收益显著，说明持仓结构明显优于市场平均水平。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-alert-default)"></i>
                <span><strong class="text-[var(--text-default)]">放量下跌需警惕：</strong>两市成交 <strong class="num">2.57万亿</strong>，较前日放量约 <strong class="num">4,200亿</strong>。放量+普跌的组合说明抛压尚未完全释放，短期需关注是否出现止跌信号。</span>
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
    disclaimer: "⚠️ 以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。持仓收益对比仅为客观展示，不构成操作建议。放量下跌后市场情绪偏弱，建议关注次日是否出现缩量企稳信号。",
    generatedAt: "报告生成时间：2026-08-13"
  },
  charts: [
    // divergenceChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/12)", "今日 (8/13)"],
          datasets: [
            {
              label: "中位数涨跌幅",
              data: [0.83, -1.48],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6, barPercentage: 0.25
            },
            {
              label: "沪深300涨跌幅",
              data: [0.65, -0.57],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6, barPercentage: 0.25
            },
            {
              label: "持仓收益率",
              data: [0.68, 0.21],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 6, barPercentage: 0.25
            }
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
    // styleChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["创业板指", "上证指数", "沪深300", "国证2000", "科创50", "北证50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [-0.45, -0.50, -0.57, -1.07, -1.11, -1.62],
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
    // reversalChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["科创50", "创业板指", "沪深300", "中证1000", "北证50"],
          datasets: [
            {
              label: "前日 (8/12)",
              data: [2.09, 1.73, 0.65, 1.37, 0.27],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 5, barPercentage: 0.7
            },
            {
              label: "今日 (8/13)",
              data: [-1.11, -0.45, -0.57, -1.00, -1.62],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 5, barPercentage: 0.7
            }
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
    // volumeChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/12)", "今日 (8/13)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.15, 2.57],
            backgroundColor: p.amber,
            borderRadius: 8, barPercentage: 0.5
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: p.tooltip({ displayColors: false, valueFmt: function (c) { return "成交额: " + c.parsed.y + "万亿"; } })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { display: false } },
            y: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 11 }, callback: function (v) { return v + "万亿"; } }, grid: { color: p.gridColor }, beginAtZero: false, min: 2.0, max: 2.7 }
          }
        }
      };
    },
    // allIndexChart
    function (p) {
      return {
        type: "bar",
        data: {
          labels: ["创业板指", "上证指数", "沪深300", "深证成指", "中证500", "中证1000", "国证2000", "科创50", "北证50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [-0.45, -0.50, -0.57, -0.87, -0.96, -1.00, -1.07, -1.11, -1.62],
            backgroundColor: function (ctx) {
              var v = ctx.raw;
              if (v === null || v === undefined) return "rgba(149,153,166,0.3)";
              return v >= 0 ? p.green : p.red;
            },
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
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 10 }, maxRotation: 45, minRotation: 35 }, grid: { display: false } }
          }
        }
      };
    }
  ]
};
