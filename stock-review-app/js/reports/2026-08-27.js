/**
 * 2026-08-27 — A股收盘复盘报告
 * 科创暴涨，半导体爆发，量价齐升
 * Loaded after js/data.js; adds this date to window.REPORTS.
 */
window.REPORTS = window.REPORTS || {};
window.REPORTS["2026-08-27"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-27",
    subtitle: "科创暴涨，半导体爆发，量价齐升",
    dateLabel: "2026-08-27"
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
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.53%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.09pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+2.53%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.32pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300 加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.50%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-0.35pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">剪刀差（中位数−加权）</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+0.03%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+0.44pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓超额收益</span>
            <span class="ds-statcard__value" style="color:var(--stock-up)">+2.00%</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>+1.23pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">强普涨</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--success">近3400只上涨</span>
              <span class="ds-statcard__caption">上涨占比约63%</span>
            </span>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th class="num">今日（8/27）</th>
                <th class="num">前一日（8/26）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>个股涨跌幅中位数</td>
                <td class="num" style="color:var(--stock-up)">+0.53%</td>
                <td class="num" style="color:var(--stock-up)">+0.44%</td>
                <td class="num" style="color:var(--stock-up)">+0.09pp</td>
              </tr>
              <tr>
                <td>加权指数（沪深300）</td>
                <td class="num" style="color:var(--stock-up)">+0.50%</td>
                <td class="num" style="color:var(--stock-up)">+0.85%</td>
                <td class="num" style="color:var(--stock-down)">-0.35pp</td>
              </tr>
              <tr>
                <td>指数失真剪刀差（中位数−加权）</td>
                <td class="num" style="color:var(--stock-up)">+0.03%</td>
                <td class="num" style="color:var(--stock-down)">-0.41%</td>
                <td class="num" style="color:var(--stock-up)">+0.44pp</td>
              </tr>
              <tr>
                <td>持仓收益率</td>
                <td class="num" style="color:var(--stock-up)">+2.53%</td>
                <td class="num" style="color:var(--stock-up)">+1.21%</td>
                <td class="num" style="color:var(--stock-up)">+1.32pp</td>
              </tr>
              <tr>
                <td>持仓收益 vs 中位数（超额）</td>
                <td class="num" style="color:var(--stock-up)">+2.00%</td>
                <td class="num" style="color:var(--stock-up)">+0.77%</td>
                <td class="num" style="color:var(--stock-up)">+1.23pp</td>
              </tr>
              <tr>
                <td>赚钱效应评级</td>
                <td>强普涨（近3400只个股上涨，上涨占比约63%）</td>
                <td>指数强于个股</td>
                <td style="color:var(--stock-up)">赚钱效应持续回暖</td>
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
            今日中位数<span class="num" style="color:var(--stock-up)">+0.53%</span>，沪深300涨<span class="num" style="color:var(--stock-up)">+0.50%</span>，剪刀差接近持平（<span class="num" style="color:var(--stock-up)">+0.03%</span>），说明个股与权重基本同步上涨。全市场近3400只个股上涨，涨停78家、跌停4家。您的持仓收益<span class="num" style="color:var(--stock-up)">+2.53%</span>，大幅跑赢全市场中位数2.00个百分点，超额收益连续两日显著为正，持仓结构与市场最强方向高度契合。
          </p>
        </div>
      `
    },
    { id: "profit", index: "02", title: "赚钱效应分析", html: `<div class="ds-profit__stack"><div class="ds-profit-rating"><div class="ds-profit-rating__icon-wrap">🔥</div><div class="ds-profit-rating__body"><div class="ds-profit-rating__title">强普涨</div><div class="ds-profit-rating__chips"><span class="ds-tag ds-tag--success">强势普涨</span><span class="ds-tag ds-tag--success">💡 共振 · 剪刀差 +0.03%</span></div><p class="ds-profit-rating__desc">全市场 <b>3,400</b> 只个股上涨 · <b>1,900</b> 只下跌 · <b>78</b> 家涨停 · 上涨占比约 <b>63.0%</b> · <span style="color:var(--text-default)">失真：≈ 权重与个股同步，失真度极低</span></p></div><div class="ds-profit-rating__figure"><div class="ds-profit-rating__figure-num" style="color:var(--stock-up)">63.0%</div><div class="ds-profit-rating__figure-label">上涨占比</div></div></div><div class="ds-card"><h3 class="ds-card__title">个股涨跌热力指标</h3><div class="ds-profit-heatgrid"><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="trending-up"></i>上涨个股数</div><div class="ds-heat-cell__val">3,400</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="trending-down"></i>下跌个股数</div><div class="ds-heat-cell__val">1,900</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="flame"></i>涨停家数</div><div class="ds-heat-cell__val">78</div></div><div class="ds-heat-cell is-down"><div class="ds-heat-cell__head"><i data-lucide="snowflake"></i>跌停家数</div><div class="ds-heat-cell__val">—</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="pie-chart"></i>上涨占比</div><div class="ds-heat-cell__val">63.0%</div></div><div class="ds-heat-cell is-up"><div class="ds-heat-cell__head"><i data-lucide="gauge"></i>个股中位数</div><div class="ds-heat-cell__val">+0.53%</div><div class="ds-heat-cell__sub">全市场个股涨跌幅中位数</div></div></div></div><div class="ds-card"><h3 class="ds-card__title">个股 vs 权重（失真度对比）</h3><div class="ds-profit-distortion"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">个 股</div><div class="ds-statcard"><span class="ds-statcard__label">个股涨跌幅中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.53%</span></div></div><div class="ds-profit-distortion__scissor"><div class="lbl">指数失真剪刀差</div><div class="big" style="color:var(--stock-up)">+0.03%</div><span class="ds-tag ds-tag--success">共振</span><div class="lbl" style="margin-top:8px;letter-spacing:0.02em;text-transform:none">≈ 权重与个股同步，失真度极低</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">权 重</div><div class="ds-statcard"><span class="ds-statcard__label">沪深300 加权指数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.50%</span></div></div></div></div><div class="ds-card"><h3 class="ds-card__title">持仓 vs 市场（超额收益对比）</h3><div class="ds-profit-holding"><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">持 仓</div><div class="ds-statcard"><span class="ds-statcard__label">持仓收益率</span><span class="ds-statcard__value" style="color:var(--stock-up)">+2.53%</span></div></div><div class="ds-profit-holding__excess"><div class="lbl">超 额 收 益</div><div class="num" style="color:var(--stock-up)">+2.00%</div><span class="ds-tag ds-tag--success">跑赢市场</span><div class="ds-heat-cell__sub" style="text-align:center">跑赢市场（超额收益为正，持仓契合市场最强方向）</div></div><div class="ds-profit-distortion__col"><div class="ds-profit-distortion__vs">市 场</div><div class="ds-statcard"><span class="ds-statcard__label">全市场中位数</span><span class="ds-statcard__value" style="color:var(--stock-up)">+0.53%</span></div></div></div><div class="ds-profit-holding__advice is-up">💡 超额收益连续显著为正，持仓结构与市场最强方向高度契合，可考虑适度沿用当前结构。</div></div></div>` },
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
                <th class="num">前日涨跌幅（8/26）</th>
                <th class="num">环比（今日-前日）</th>
                <th class="num">今日收盘价</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-up)">+3.77%</td>
                <td class="num" style="color:var(--stock-up)">+1.71%</td>
                <td class="num" style="color:var(--stock-up)">+2.06pp</td>
                <td class="num">1,693.48</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>中证1000</td>
                <td class="num" style="color:var(--stock-up)">+2.10%</td>
                <td class="num" style="color:var(--stock-up)">+0.23%</td>
                <td class="num" style="color:var(--stock-up)">+1.87pp</td>
                <td class="num">7,702.85</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-up)">+1.71%</td>
                <td class="num" style="color:var(--stock-up)">+0.51%</td>
                <td class="num" style="color:var(--stock-up)">+1.20pp</td>
                <td class="num">3,473.35</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>中证红利</td>
                <td class="num" style="color:var(--stock-down)">-0.45%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">5,633.62</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>上证50</td>
                <td class="num" style="color:var(--stock-up)">+0.53%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">—</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>沪深300</td>
                <td class="num" style="color:var(--stock-up)">+0.50%</td>
                <td class="num" style="color:var(--stock-up)">+0.85%</td>
                <td class="num" style="color:var(--stock-down)">-0.35pp</td>
                <td class="num">4,613.71</td>
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
            <table class="ds-table min-w-[480px]">
              <thead>
                <tr>
                  <th>指数</th>
                  <th class="num">今日涨跌幅</th>
                  <th class="num">收盘价/点位</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-up)">+1.13%</td><td class="num">3,956.57</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-up)">+1.50%</td><td class="num">14,048.88</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-up)">+0.50%</td><td class="num">4,613.71</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-up)">+3.77%</td><td class="num">1,693.48</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-up)">+1.71%</td><td class="num">3,473.35</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-up)">+1.71%</td><td class="num">7,903.49</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-up)">+2.10%</td><td class="num">7,702.85</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-up)">+0.65%</td><td class="num">1,074.96</td></tr>
                <tr><td>中证红利</td><td class="num" style="color:var(--stock-down)">-0.45%</td><td class="num">5,633.62</td></tr>
                <tr><td>科创综指</td><td class="num" style="color:var(--stock-up)">+3.17%</td><td class="num">1,965.87</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-card">
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">
            科创50暴涨<span class="num" style="color:var(--stock-up)">3.77%</span>强势领涨全场，中证1000（<span class="num" style="color:var(--stock-up)">+2.10%</span>）紧随其后，中小盘成长风格全面碾压权重。中证红利（<span class="num" style="color:var(--stock-down)">-0.45%</span>）成为唯一下跌的主要宽基指数，资金从防御板块全面涌向科技成长。北证50仅涨<span class="num" style="color:var(--stock-up)">0.65%</span>，小微盘内部出现明显分化。
          </p>
        </div>
      `
    },
    {
      id: "liquidity",
      index: "04",
      title: "流动性异动警报",
      html: `
        <div class="ds-alert ds-alert--success">
          <div class="ds-alert__icon">
            <i data-lucide="trending-up" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">成交额显著放量 重回2.1万亿上方</div>
            <div class="ds-alert__desc">沪深京三市合计 2.14万亿，较前日放量约 3,191亿（+17.6%），终结连续四日缩量</div>
          </div>
        </div>

        <div class="ds-table-wrap overflow-x-auto">
          <table class="ds-table min-w-[680px]">
            <thead>
              <tr>
                <th>指标</th>
                <th>今日（8/27）</th>
                <th class="num">前一日（8/26）</th>
                <th class="num">环比变化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>沪深两市合计成交额</td>
                <td>2.14万亿（沪深京三市）</td>
                <td class="num">1.81万亿</td>
                <td class="num" style="color:var(--stock-up)">放量约3,191亿（+17.6%）</td>
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
            成交额显著放量，重回2.1万亿上方，终结了此前连续四日缩量的颓势。放量+普涨+科创领涨的组合，说明增量资金入场意愿增强，属量价齐升的良性格局；资金集中流向科创/半导体/算力硬件等科技成长方向；若成交能持续维持在2万亿以上，反弹行情有望延续。
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
            <p class="text-[var(--text-default)] font-medium text-sm">"科创暴涨，半导体爆发，量价齐升"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">科创50暴涨3.77%：</strong>科创50大涨3.77%领涨全场，科创综指涨3.17%。半导体板块全面爆发，赛微电子、昂瑞微-UW、晶丰明源20cm涨停。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">算力硬件全线走强：</strong>受英伟达财报超预期催化，PCB、CPO、存储芯片等算力硬件股集体爆发。金安国纪、宏昌电子、长飞光纤等多股涨停。德明利、大普微等存储芯片股涨停。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">农业/黄金持续活跃：</strong>种业板块表现强势，万向德农3连板，金健米业9天6板。黄金概念走强，湖南黄金、招金黄金、莱绅通灵涨停。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">防御板块遭抛弃：</strong>银行、白酒、水务、传媒娱乐等板块跌幅居前。中证红利（-0.45%）成为唯一下跌的主要宽基指数。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="bar-chart-3" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-primary-default)"></i>
                <span><strong class="text-[var(--text-default)]">指数与个股共振：</strong>今日剪刀差仅+0.03%，说明权重与个股同步上涨，市场共振良好。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现极为优异：</strong>您今日持仓收益+2.53%，跑赢全市场中位数2.00个百分点，超额收益连续两日大幅为正。在科创50暴涨3.77%的背景下，持仓收益接近创业板指与中证1000之间水平，说明持仓结构与市场最强方向高度契合。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">量价齐升信号积极：</strong>两市成交放量至2.14万亿，终结连续四日缩量。放量+普涨的组合说明增量资金入场，属良性上涨格局。若成交能持续维持在2万亿以上，反弹行情有望延续。</span>
              </li>
            </ul>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。科创50单日涨幅较大，短期存在获利回吐压力，建议关注量能持续性及板块轮动节奏。",
    generatedAt: "报告生成时间：2026-08-27"
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
              label: "今日（8/27）",
              data: [0.53, 0.50, 2.53, 0.03],
              backgroundColor: function (ctx) { return ctx.raw >= 0 ? p.green : p.red; },
              borderRadius: 4, barPercentage: 0.7, categoryPercentage: 0.8
            },
            {
              label: "前一日（8/26）",
              data: [0.44, 0.85, 1.21, -0.41],
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
          labels: ["科创50", "中证1000", "创业板指", "上证50", "沪深300", "中证红利"],
          datasets: [{
            label: "今日涨跌幅",
            data: [3.77, 2.10, 1.71, 0.53, 0.50, -0.45],
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
          labels: ["8/26", "8/27"],
          datasets: [{
            label: "成交额（万亿）",
            data: [1.81, 2.14],
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
