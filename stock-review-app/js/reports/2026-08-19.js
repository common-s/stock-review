/**
 * 2026-08-19 — A股收盘复盘报告（系统性暴跌 · 科技股重灾区 · 煤炭银行逆势护盘）
 * Migrated from the legacy light-theme HTML report into the Trae dark design
 * system data format. Consumed by app.js via window.REPORTS["2026-08-19"].
 */
window.REPORTS["2026-08-19"] = {
  header: {
    tag: "A股",
    title: "收盘复盘 · 2026-08-19",
    subtitle: "系统性暴跌 · 科技股重灾区 · 煤炭银行逆势护盘",
    dateLabel: "2026-08-19"
  },
  sections: [
    {
      id: "sentiment",
      index: "01",
      title: "全市场情绪体温计（含持仓收益）",
      html: `
        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="alert-octagon" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">系统性暴跌警报</div>
            <div class="ds-alert__desc">今日A股遭遇系统性暴跌。全市场仅<b>449只</b>个股上涨，<b>5069只</b>下跌，赚钱效应仅<b>8.14%</b>。中位数<b>-3.93%</b>，沪深300跌<b>2.90%</b>。科创50暴跌<b>6.89%</b>，创业板指暴跌<b>6.26%</b>，科技成长板块成重灾区。两市成交<b>2.53万亿</b>，放量约2,800亿，属恐慌性放量暴跌。</div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="ds-statcard">
            <span class="ds-statcard__label">个股涨跌幅中位数</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-3.93%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-3.45pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">沪深300加权指数</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-2.90%</span>
            <span class="ds-statcard__delta">
              <span>—</span>
              <span class="ds-statcard__caption">较前日（前日待核实）</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">指数失真剪刀差</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.03%</span>
            <span class="ds-statcard__delta">
              <span>—</span>
              <span class="ds-statcard__caption">较前日（前日待计算）</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">持仓收益率</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-5.63%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-5.71pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">超额收益（持仓−中位数）</span>
            <span class="ds-statcard__value" style="color:var(--stock-down)">-1.70%</span>
            <span class="ds-statcard__delta is-down">
              <i data-lucide="arrow-down" class="w-3 h-3"></i>
              <span>-2.26pp</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-statcard">
            <span class="ds-statcard__label">赚钱效应评级</span>
            <span class="ds-statcard__value" style="color:var(--text-default);font-size:var(--heading-sm-font-size)">🚨 极弱</span>
            <span class="ds-statcard__delta">
              <span class="ds-tag ds-tag--danger">449涨/5069跌</span>
              <span class="ds-statcard__caption">赚钱效应仅8.14%</span>
            </span>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">中位数 vs 持仓收益 vs 沪深300 — 前日(8/18)与今日(8/19)对比</h3>
          <div class="relative" style="height:240px;">
            <canvas id="divergenceChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">持仓收益分析</h3>
          <p class="text-[var(--text-secondary)] text-sm leading-relaxed">您今日持仓收益 <b>-5.63%</b>，跑输全市场中位数 <b>-3.93%</b> 共 <b>1.70个百分点</b>，超额收益由正（<b>+0.56%</b>）急转至负（<b>-1.70%</b>）。在科创50暴跌6.89%、创业板指暴跌6.26%的背景下，推测持仓中科技成长（半导体、CPO、算力等）权重较高，导致跌幅显著大于市场平均。建议审视持仓集中度与板块分布。</p>
        </div>

        <div class="ds-alert ds-alert--warning">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">核心信号</div>
            <div class="ds-alert__desc">今日市场遭遇系统性暴跌。中位数 <b>-3.93%</b>，沪深300跌 <b>2.90%</b>，剪刀差为 <b>-1.03%</b>，说明权重股相对抗跌，中小盘跌幅更大。全市场仅449只个股上涨，5069只下跌，属极端普跌行情。您的持仓收益 <b>-5.63%</b>，跑输中位数 <b>1.70个百分点</b>，超额收益由正转负，需重点关注持仓中是否集中于今日跌幅最大的科技成长板块。</div>
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
          <h3 class="ds-card__title">最强 vs 最弱 — 今日涨跌幅对比（全线下跌）</h3>
          <div class="relative" style="height:260px;">
            <canvas id="styleChart"></canvas>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">关键指数：前日(8/18) vs 今日(8/19) — "系统性暴跌，全线重挫"</h3>
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
                <th class="num">前日涨跌幅(8/18)</th>
                <th class="num">环比变化</th>
                <th class="num">成交额</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>上证指数</td>
                <td class="num" style="color:var(--stock-down)">-2.40%</td>
                <td class="num" style="color:var(--stock-down)">-0.19%</td>
                <td class="num" style="color:var(--stock-down)">-2.21pp</td>
                <td class="num">1.22万亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>沪深300</td>
                <td class="num" style="color:var(--stock-down)">-2.90%</td>
                <td class="num">待核实</td>
                <td class="num">—</td>
                <td class="num">7,053亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--success">最强</span></td>
                <td>北证50</td>
                <td class="num" style="color:var(--stock-down)">-4.89%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">191亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>科创50</td>
                <td class="num" style="color:var(--stock-down)">-6.89%</td>
                <td class="num" style="color:var(--stock-up)">+0.70%</td>
                <td class="num" style="color:var(--stock-down)">-7.59pp</td>
                <td class="num">1,325亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>创业板指</td>
                <td class="num" style="color:var(--stock-down)">-6.26%</td>
                <td class="num" style="color:var(--stock-up)">+0.02%</td>
                <td class="num" style="color:var(--stock-down)">-6.28pp</td>
                <td class="num">6,336亿</td>
              </tr>
              <tr>
                <td><span class="ds-tag ds-tag--danger">最弱</span></td>
                <td>国证2000</td>
                <td class="num" style="color:var(--stock-down)">-5.50%</td>
                <td class="num">—</td>
                <td class="num">—</td>
                <td class="num">7,250亿</td>
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
                <tr><td>上证指数</td><td class="num" style="color:var(--stock-down)">-2.40%</td><td class="num">3,894.42</td><td class="num">1.22万亿</td></tr>
                <tr><td>深证成指</td><td class="num" style="color:var(--stock-down)">-5.01%</td><td class="num">13,890.15</td><td class="num">1.29万亿</td></tr>
                <tr><td>沪深300</td><td class="num" style="color:var(--stock-down)">-2.90%</td><td class="num">4,588.70</td><td class="num">7,053亿</td></tr>
                <tr><td>科创50</td><td class="num" style="color:var(--stock-down)">-6.89%</td><td class="num">1,667.52</td><td class="num">1,325亿</td></tr>
                <tr><td>创业板指</td><td class="num" style="color:var(--stock-down)">-6.26%</td><td class="num">3,473.49</td><td class="num">6,336亿</td></tr>
                <tr><td>中证500</td><td class="num" style="color:var(--stock-down)">-4.81%</td><td class="num">7,783.46</td><td class="num">4,783亿</td></tr>
                <tr><td>中证1000</td><td class="num" style="color:var(--stock-down)">-5.39%</td><td class="num">7,517.77</td><td class="num">5,348亿</td></tr>
                <tr><td>北证50</td><td class="num" style="color:var(--stock-down)">-4.89%</td><td class="num">1,082.19</td><td class="num">191亿</td></tr>
                <tr><td>国证2000</td><td class="num" style="color:var(--stock-down)">-5.50%</td><td class="num">9,764.86</td><td class="num">7,250亿</td></tr>
                <tr><td>恒生指数</td><td class="num" style="color:var(--stock-up)">+0.09%</td><td class="num">25,495.07</td><td class="num">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">大盘抗跌，科技重挫</div>
            <div class="ds-alert__desc"><b>大盘股明显抗跌</b>，中小盘/科技股重挫。上证指数（<b>-2.40%</b>）和沪深300（<b>-2.90%</b>）跌幅最小；科创50（<b>-6.89%</b>）和创业板指（<b>-6.26%</b>）跌幅最大，反映科技成长板块遭遇系统性抛售。价值风格（沪深300 <b>-2.90%</b>）显著跑赢成长风格（创业板指 <b>-6.26%</b>）。恒生指数逆势微涨 <b>+0.09%</b>，与A股形成明显背离。</div>
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
            <span class="ds-statcard__value" style="display:block;margin:10px 0;font-size:30px;">2.53万亿</span>
            <span class="ds-statcard__delta is-up">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>放量约2,800亿 (+12.4%)</span>
              <span class="ds-statcard__caption">较前日</span>
            </span>
          </div>
          <div class="ds-card">
            <h3 class="ds-card__title">成交额对比</h3>
            <div class="relative" style="height:240px;">
              <canvas id="volumeChart"></canvas>
            </div>
          </div>
        </div>

        <div class="ds-alert ds-alert--danger">
          <div class="ds-alert__icon">
            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          </div>
          <div>
            <div class="ds-alert__title">放量暴跌 — 恐慌盘集中涌出</div>
            <div class="ds-alert__desc">成交额显著放量，较前日增加约 <b>2,800亿</b>（<b>+12.4%</b>）。<b>放量 + 普跌 + 超5000股下跌</b>的组合，说明恐慌性抛盘集中涌出，属于放量暴跌；增量资金未入场，而是存量资金在加速出逃；权重股相对抗跌（上证-2.40%），中小创重挫（科创-6.89%），资金向大盘蓝筹（银行、煤炭、油气）避险迁移。放量暴跌意味着短期抛压集中释放，但恐慌情绪尚未完全宣泄，需警惕次日惯性下探风险。</div>
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
            <p class="text-[var(--text-default)] font-medium text-sm">"系统性暴跌，科技股成重灾区，煤炭银行逆势护盘"</p>
            <ul class="ds-stack-12 text-sm text-[var(--text-secondary)] leading-relaxed">
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">全线暴跌：</strong>A股主要宽基指数全线大跌，上证指数跌 <span class="num" style="color:var(--stock-down)">-2.40%</span> 失守3900点，深证成指跌 <span class="num" style="color:var(--stock-down)">-5.01%</span>，创业板指暴跌 <span class="num" style="color:var(--stock-down)">-6.26%</span>。全市场仅 <strong class="text-[var(--text-default)]">449只</strong>个股上涨，<strong class="text-[var(--text-default)]">5069只</strong>下跌，赚钱效应仅 <strong class="text-[var(--text-default)]">8.14%</strong>。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-down" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-down)"></i>
                <span><strong class="text-[var(--text-default)]">科技成长遭系统性抛售：</strong>科创50暴跌 <span class="num" style="color:var(--stock-down)">-6.89%</span> 领跌全场，CPO、存储芯片等算力硬件板块大幅回调，生益科技、通富微电、长飞光纤等多股跌停。半导体设备、通信线缆等板块跌幅居前。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="trending-up" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--stock-up)"></i>
                <span><strong class="text-[var(--text-default)]">防御板块逆势走强：</strong>煤炭板块逆势大涨，陕西黑猫、大有能源、美锦能源涨停；银行股普涨，中信银行涨超4%，农业银行涨超2%；海运、油气、保险等板块亦逆市上涨。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="zap" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-cyan)"></i>
                <span><strong class="text-[var(--text-default)]">宇树科技上市首日暴涨：</strong>新股宇树科技上市首日收涨 <span class="num" style="color:var(--stock-up)">+460.34%</span> 报845元，但人形机器人板块整体大跌，卧龙电驱、五洲新春等跌停。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="scissors" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--accent-violet)"></i>
                <span><strong class="text-[var(--text-default)]">指数失真方向：</strong>今日剪刀差为 <span class="num" style="color:var(--stock-down)">-1.03%</span>（中位数-3.93%，沪深300-2.90%），说明权重股相对抗跌，中小盘跌幅更大。市场呈现"权重抗跌、小盘重挫"的极端分化格局。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="pie-chart" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-warning-default)"></i>
                <span><strong class="text-[var(--text-default)]">持仓表现大幅落后：</strong>您今日持仓收益 <span class="num" style="color:var(--stock-down)">-5.63%</span>，跑输全市场中位数 <span class="num" style="color:var(--stock-down)">-3.93%</span> 共 <strong class="text-[var(--text-default)]">1.70个百分点</strong>，超额收益由正（<strong class="text-[var(--text-default)]">+0.56%</strong>）急转至负（<strong class="text-[var(--text-default)]">-1.70%</strong>）。推测持仓中科技成长权重较高，建议审视持仓集中度与板块分布。</span>
              </li>
              <li class="flex gap-3">
                <i data-lucide="alert-circle" class="w-4 h-4 flex-shrink-0 mt-0.5" style="color:var(--status-alert-default)"></i>
                <span><strong class="text-[var(--text-default)]">放量暴跌需高度警惕：</strong>两市成交 <strong class="text-[var(--text-default)]">2.53万亿</strong>，较前日放量约2,800亿。放量+普跌的组合说明恐慌盘集中涌出，短期抛压尚未完全释放。历史上此类极端放量暴跌后，次日往往有惯性下探，但急跌后也常伴随技术性反抽。关注后续是否出现缩量企稳信号。</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="ds-card">
          <h3 class="ds-card__title">主要指数今日涨跌幅一览 — 系统性暴跌全景</h3>
          <div class="relative" style="height:240px;">
            <canvas id="allIndexChart"></canvas>
          </div>
        </div>
      `
    }
  ],
  footer: {
    disclaimer: "以上数据来源于公开市场信息及用户提供，仅供参考，不构成投资建议。持仓收益对比仅为客观展示，不构成操作建议。市场遭遇系统性暴跌，情绪极度恐慌，建议保持冷静，避免恐慌性杀跌，等待市场企稳信号。",
    generatedAt: "报告生成时间：2026-08-19"
  },
  charts: [
    // 1. divergenceChart — 中位数 / 持仓 / 沪深300，前日 vs 今日
    function (p) {
      var nullColor = "rgba(149,153,166,0.3)";
      function bg(ctx) {
        var v = ctx.raw;
        return v === null || v === undefined ? nullColor : (v >= 0 ? p.green : p.red);
      }
      return {
        type: "bar",
        data: {
          labels: ["前日 (8/18)", "今日 (8/19)"],
          datasets: [
            { label: "中位数涨跌幅", data: [-0.48, -3.93], backgroundColor: bg, borderRadius: 6, barPercentage: 0.25 },
            { label: "持仓收益率", data: [0.08, -5.63], backgroundColor: bg, borderRadius: 6, barPercentage: 0.25 },
            { label: "沪深300", data: [null, -2.90], backgroundColor: bg, borderRadius: 6, barPercentage: 0.25 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              valueFmt: function (c) {
                return c.dataset.label + ": " + (c.parsed.y === null ? "待核实" : c.parsed.y.toFixed(2) + "%");
              }
            })
          },
          scales: {
            x: { ticks: { color: p.tickColor, font: { family: p.chartFont, size: 12 } }, grid: { color: p.gridColor } },
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
          labels: ["上证指数", "沪深300", "北证50", "国证2000", "创业板指", "科创50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [-2.40, -2.90, -4.89, -5.50, -6.26, -6.89],
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
          labels: ["科创50", "创业板指", "深证成指", "上证指数", "中证500", "中证1000"],
          datasets: [
            { label: "前日 (8/18)", data: [0.70, 0.02, -0.20, -0.19, -0.63, -0.85], backgroundColor: bg, borderRadius: 5, barPercentage: 0.7 },
            { label: "今日 (8/19)", data: [-6.89, -6.26, -5.01, -2.40, -4.81, -5.39], backgroundColor: bg, borderRadius: 5, barPercentage: 0.7 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: p.tickColor, font: { family: p.chartFont, size: 12 }, boxWidth: 12 } },
            tooltip: p.tooltip({
              valueFmt: function (c) {
                return c.dataset.label + ": " + (c.parsed.y === null ? "无数据" : c.parsed.y.toFixed(2) + "%");
              }
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
          labels: ["前日 (8/18)", "今日 (8/19)"],
          datasets: [{
            label: "成交额（万亿）",
            data: [2.25, 2.53],
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
          labels: ["恒生指数", "上证指数", "沪深300", "中证500", "北证50", "深证成指", "中证1000", "国证2000", "创业板指", "科创50"],
          datasets: [{
            label: "今日涨跌幅",
            data: [0.09, -2.40, -2.90, -4.81, -4.89, -5.01, -5.39, -5.50, -6.26, -6.89],
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
