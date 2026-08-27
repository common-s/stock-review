/**
 * 2026-08-26 — A股收盘复盘报告
 * 科创领涨，金融有色齐飞，权重强于个股
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-08-26"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-26",
    subtitle: "科创领涨，金融有色齐飞，权重强于个股",
    dateLabel: "2026-08-26"
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
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.44%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.03pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+1.21%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.65pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300 加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.85%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.09pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-0.41%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-2.12pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓超额收益</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.77%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+2.68pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">指数强于个股</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--warning">2946涨/2448跌</span>
              <span class="ds-statcard__caption">上涨占比约53%</span>
            </span>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th class="num">今日（8/26）</th>
                <th class="num">前一日（8/25）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个股涨跌幅中位数</td>
                <td class="num" style="color:var(--stock-up)">+0.44%</td>
                <td class="num" style="color:var(--stock-up)">+1.47%</td>
                <td class="num" style="color:var(--stock-down)">-1.03pp</td>
              </tr>
              <tr>
                <td>加权指数（沪深300）</td>
                <td class="num" style="color:var(--stock-up)">+0.85%</td>
                <td class="num" style="color:var(--stock-down)">-0.24%</td>
                <td class="num" style="color:var(--stock-up)">+1.09pp</td>
              </tr>
              <tr>
                <td>指数失真剪刀差（中位数−加权）</td>
                <td class="num" style="color:var(--stock-down)">-0.41%</td>
                <td class="num" style="color:var(--stock-up)">+1.71%</td>
                <td class="num" style="color:var(--stock-down)">-2.12pp</td>
              </tr>
              <tr>
                <td>持仓收益率</td>
                <td class="num" style="color:var(--stock-up)">+1.21%</td>
                <td class="num" style="color:var(--stock-down)">-0.44%</td>
                <td class="num" style="color:var(--stock-up)">+1.65pp</td>
              </tr>
              <tr>
                <td>持仓收益 vs 中位数（超额）</td>
                <td class="num" style="color:var(--stock-up)">+0.77%</td>
                <td class="num" style="color:var(--stock-down)">-1.91%</td>
                <td class="num" style="color:var(--stock-up)">+2.68pp</td>
              </tr>
              <tr>
                <td>赚钱效应评级</td>
                <td>指数强于个股（2946涨/2448跌，上涨占比约53%）</td>
                <td>强普涨</td>
                <td style="color:var(--stock-down)">赚钱效应边际转弱</td>
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
            今日中位数<span class="num" style="color:var(--stock-up)">+0.44%</span>，但沪深300大涨<span class="num" style="color:var(--stock-up)">+0.85%</span>，剪刀差由正转负至<span class="num" style="color:var(--stock-down)">-0.41%</span>，说明权重股显著跑赢中小盘，属"赚指数不赚钱"行情。全市场2946只个股上涨、2448只下跌，上涨占比约53%。您的持仓收益<span class="num" style="color:var(--stock-up)">+1.21%</span>，跑赢全市场中位数0.77个百分点，终结了此前连续三日跑输的颓势，超额收益由负转正，持仓结构明显改善。
          </p>
        </div>
      `
    },
    { id: "profit", index: "02", title: "赚钱效应分析", html: `<div class="ds-profit__stack"><div class="ds-profit-rating"><div class="ds-profit-rating__icon-wrap">⚠️</div><div class="ds-profit-rating__body"><div class="ds-profit-rating__title">指数强于个股</div><div class="ds-profit-rating__chips"><span class="ds-tag ds-tag--warning">指数强于个股</span><span class="ds-tag ds-tag--warning">💡 指数强 · 剪刀差 -0.41%</span></div><p class="ds-profit-rating__desc">全市场 <b>2,448</b> 只个股上涨 · <b>2,448</b> 只下跌 · 上涨占比约 <b>53.0%</b> · <span style="color:var(--stock-down)">失真：权重跑赢个股 -0.41%，赚指数不赚钱</span></p></div><div class="ds-profit-rating__figure"><div class="ds-profit-rating__figure-num" style="color:var(--stock-up)">53.0%</div><div class="ds-profit-rating__figure-label">上涨占比</div></div></div><div class="ds-card"><h3 class="ds-card__title">个股涨跌热力指标</h3><div class="ds-profit-heatgrid"><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="trending-up"></i>上涨个股数</div><div class="ds-heat-cell__val">2,448</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="trending-down"></i>下跌个股数</div><div class="ds-heat-cell__val">2,448</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="flame"></i>涨停家数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="snowflake"></i>跌停家数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="pie-chart"></i>上涨占比</div><div class="ds-heat-cell__val">53.0%</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="gauge"></i>个股中位数</div><div class="ds-heat-cell__val">+0.44%</div><div class="ds-heat-cell__sub">全市场个股涨跌幅中位数</div></div></div></div><div class="ds-card"><h3 class="ds-card__title">个股 vs 权重（失真度对比）</h3><div class="ds-profit-distortion"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">个 股</div><div class="ds-statcard"><span class="ds-statcard__label">个股涨跌幅中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.44%</span></div></div><div class="ds-profit-distortion__scissor"><div class="lbl">指数失真剪刀差</div><div class="big" style="color:var(--stock-down)">-0.41%</div><span class="ds-tag ds-tag--warning">指数强</span><div class="lbl" style="margin-top:8px;letter-spacing:0.02em;text-transform:none">权重跑赢个股 -0.41%，赚指数不赚钱</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">权 重</div><div class="ds-statcard"><span class="ds-statcard__label">沪深300 加权指数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.85%</span></div></div></div></div><div class="ds-card"><h3 class="ds-card__title">持仓 vs 市场（超额收益对比）</h3><div class="ds-profit-holding"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">持 仓</div><div class="ds-statcard"><span class="ds-statcard__label">持仓收益率</span><span class="ds-statcard__value" style="color:var(--stock-up)">+1.21%</span></div></div><div class="ds-profit-holding__excess"><div class="lbl">超 额 收 益</div><div class="num" style="color:var(--stock-up)">+0.77%</div><span class="ds-tag ds-tag--success">跑赢市场</span><div class="ds-heat-cell__sub" style="text-align:center">跑赢市场（超额收益为正，持仓契合市场最强方向）</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">市 场</div><div class="ds-statcard"><span class="ds-statcard__label">全市场中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.44%</span></div></div></div><div class="ds-profit-holding__advice is-up">💡 超额收益连续显著为正，持仓结构与市场最强方向高度契合，可考虑适度沿用当前结构。</div></div></div>` },
    {
      id: "style",
      index: "03",
      title: "风格强弱排名",
      html: `
        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>排名</th>
                <th>指数</th>
                <th class="num">今日涨跌幅</th>
                <th class="num">前日涨跌幅（8/25）</th>
                <th class="num">环比（今日-前日）</th>
                <th class="num">今日成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-up)">+1.71%</td>
                <td class="num" style="color:var(--stock-up)">+0.14%</td>
                <td class="num" style="color:var(--stock-up)">+1.57pp</td>
                <td class="num">793.57亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>沪深300</td>
                <td class="num" style="color:var(--stock-up)">+0.85%</td>
                <td class="num" style="color:var(--stock-down)">-0.24%</td>
                <td class="num" style="color:var(--stock-up)">+1.09pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>中证500</td>
                <td class="num" style="color:var(--stock-up)">+0.77%</td>
                <td class="num" style="color:var(--stock-down)">-0.08%</td>
                <td class="num" style="color:var(--stock-up)">+0.85pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>中证1000</td>
                <td class="num" style="color:var(--stock-up)">+0.23%</td>
                <td class="num" style="color:var(--stock-up)">+0.48%</td>
                <td class="num" style="color:var(--stock-down)">-0.25pp</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-up)">+0.51%</td>
                <td class="num" style="color:var(--stock-down)">-1.00%</td>
                <td class="num" style="color:var(--stock-up)">+1.51pp</td>
                <td class="num">4,465.16亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--stock-up)">+0.45%</td>
                <td class="num" style="color:var(--stock-up)">+0.91%</td>
                <td class="num" style="color:var(--stock-down)">-0.46pp</td>
                <td class="num">134.34亿</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-up)">+0.59%</td><td class="num">3,912.52</td><td class="num">8,572.23亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-up)">+0.69%</td><td class="num">13,841.33</td><td class="num">9,515.00亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-up)">+0.85%</td><td class="num">4,590.79</td><td class="num">—</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-up)">+1.71%</td><td class="num">1,632.02</td><td class="num">793.57亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)">+0.51%</td><td class="num">3,414.88</td><td class="num">4,465.16亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-up)">+0.77%</td><td class="num">7,770.53</td><td class="num">—</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-up)">+0.23%</td><td class="num">7,544.67</td><td class="num">—</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-up)">+0.45%</td><td class="num">1,067.97</td><td class="num">134.34亿</td></tr>
                <tr><td>万得全A</td><td class="num" style="color:var(--stock-up)">+0.59%</td><td class="num">6,428.00</td><td class="num">—</td></tr>
                <tr><td>科创综指</td><td class="num" style="color:var(--stock-up)">+0.49%</td><td class="num">1,905.40</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            科创50（<span class="num" style="color:var(--stock-up)">+1.71%</span>）强势领涨全场，沪深300（<span class="num" style="color:var(--stock-up)">+0.85%</span>）和中证500（<span class="num" style="color:var(--stock-up)">+0.77%</span>）紧随其后。中证1000（<span class="num" style="color:var(--stock-up)">+0.23%</span>）表现最弱，市场呈现"权重搭台、中小盘跟随"格局。北证50仅涨<span class="num" style="color:var(--stock-up)">0.45%</span>，连续两日跑输主要指数。
          </p>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "04",
      title: "流动性异动警报",
      html: `
        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">成交额连续四日缩量</div>
            <div class="ds-alert__desc">沪深两市合计 1.81万亿，较前日缩量约 231亿（-1.3%），跌破1.82万亿关口</div>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th>今日（8/26）</th>
                <th class="num">前一日（8/25）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>沪深两市合计成交额</td>
                <td>1.81万亿（沪8,572亿/深9,515亿）</td>
                <td class="num">1.83万亿</td>
                <td class="num" style="color:var(--status-warning-default)">缩量约231亿（-1.3%）</td>
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
            成交额连续四日缩量，跌破1.82万亿。缩量+权重涨+中小盘跟涨的组合，说明增量资金仍未入场，属存量资金在权重内部的腾挪；资金集中流向科创50权重和金融/有色板块，中小盘跟涨力度有限；成交额较前日缩量约231亿。若成交持续在1.8万亿附近徘徊，权重行情的持续性存疑。
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
            <p class="text-[var(--text-default)] font-medium text-sm">"科创领涨，金融有色齐飞，权重强于个股"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">科创50强势领涨：</strong>科创50大涨1.71%领涨全场，半导体、算力等科技方向表现活跃。华虹宏力涨超7%，成为科创50的重要支撑。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">工业金属爆发：</strong>工业金属板块大涨3.33%，精艺股份、白银有色、江西铜业、金诚信涨停。催化为隔夜LME期铜报收14,324.5美元/吨创收盘价历史新高。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">大金融全线走强：</strong>证券板块涨2.75%全线飘红，锦龙股份、湘财股份涨停；保险板块涨2.06%。催化为20家上市券商披露上半年业绩，多家净利增幅超一倍。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">造纸板块涨幅居首：</strong>造纸板块涨3.79%居申万二级行业涨幅首位，青山纸业2连板、太阳纸业涨8.79%。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">医药板块持续调整：</strong>CRO概念走弱，诚达药业跌5.21%、康龙化成跌4.83%；医疗服务跌1.34%。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向逆转：</strong>昨日剪刀差+1.71%（个股强于指数），今日剪刀差-0.41%（指数强于个股），赚钱效应从"个股全面开花"转为"权重独强"。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现显著改善：</strong>您今日持仓收益+1.21%，跑赢全市场中位数0.77个百分点，终结了此前连续三日跑输的颓势。在科创50大涨1.71%、沪深300涨0.85%的背景下，持仓收益接近科创50水平，说明持仓结构与市场最强方向高度契合。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-triangle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">连续缩量需警惕：</strong>两市成交缩至1.81万亿，连续四日缩量。缩量+权重领涨说明资金在存量内腾挪，而非增量入场。若成交持续在1.8万亿附近徘徊，需警惕权重行情后继乏力。</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。连续缩量背景下权重行情持续性存疑，建议关注量能变化及板块轮动节奏。",
    generatedAt: "报告生成时间：2026-08-26"
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
              label: "今日（8/26）",
              data: [0.44, 0.85, 1.21, -0.41],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            },
            {
              label: "前一日（8/25）",
              data: [1.47, -0.24, -0.44, 1.71],
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
          labels: ["科创50", "沪深300", "中证500", "北证50", "创业板指", "中证1000"],
          datasets: [{
            label: "今日涨跌幅",
            data: [1.71, 0.85, 0.77, 0.45, 0.51, 0.23],
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
          labels: ["8/25", "8/26"],
          datasets: [{
            label: "成交额（万亿）",
            data: [1.83, 1.81],
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
