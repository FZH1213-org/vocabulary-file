const fs = require('fs');
const path = require('path');

// 故事配置（故事81-85）
const storyConfigs = [
  { theme: '建筑设计', title: '空间艺术', subtitle: '建筑梦想', tags: '建筑 · 设计 · 空间' },
  { theme: '园林景观', title: '园林之美', subtitle: '景观设计', tags: '园林 · 景观 · 自然' },
  { theme: '室内设计', title: '温馨之家', subtitle: '室内设计', tags: '室内 · 设计 · 家居' },
  { theme: '城市规划', title: '城市蓝图', subtitle: '规划未来', tags: '城市 · 规划 · 未来' },
  { theme: '桥梁建设', title: '跨越天堑', subtitle: '桥梁工程', tags: '桥梁 · 工程 · 技术' }
];

// 所有故事内容 - 词汇量控制在50-60个
const storyContents = {
  '建筑梦想': `建筑设计工作室里，建筑师李明正【design/设计】着新的建筑方案。作为一名建筑师，他每天都在塑造城市的空间形态。每一个设计都需要【careful/仔细】的考量，每一座建筑都承载着城市的【value/价值】。他深知建筑设计的【significance/意义】。工作室里【busy/忙碌】，他【focus/专注】于设计方案。他【early/早早】来到工作室，每天都很【intense/紧张】。他【always/总是】保持高度的创作热情。

今天的工作是完成一座商业建筑的设计方案。李明注意到建筑外观还不够【creative/创新】，需要反复调整。他反复推敲方案，寻找最优的设计表达。这是一个需要【patience/耐心】的过程。他【never/从不】放弃对完美的追求，【always/总是】力求更好的方案。他【try/尝试】不同的设计理念，寻找最佳表达。

设计过程中，李明遇到了一个难题。建筑功能布局不够【reasonable/合理】，影响使用效率。他【worried/担忧】地思考解决方案，尝试了多种布局方式。最终，他通过【meticulous/细致】的空间规划，成功优化了建筑功能。突破需要智慧。他【finally/终于】找到了答案。他【excited/激动】地完成方案。设计【perfectly/完美】呈现理念。

方案完成后，李明开始准备项目汇报。他制作演示材料，向客户展示设计理念。汇报需要投入。他【careful/仔细】地准备内容，【accurate/精确】表达理念。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量时间完善汇报。

项目汇报时，李明向客户展示了设计方案。客户的【warm/热烈】反响让他感到欣慰。他的设计获得了高度评价，被认为是充满创意的佳作。汇报【successful/成功】。他【proud/自豪】地看着客户认可。每个人都为他的【achieve/成就】感到高兴。

汇报结束后，李明感到一种深深的【satisfaction/满足】。创作的喜悦让他感到欣慰，但他明白，这只是建筑生涯的一个项目。他【humbly/谦逊地】接受客户的赞誉。成功在此【mark/标记】。他【continue/继续】追求更高的设计境界。

他明白，建筑不仅是职业，更是城市的塑造者。他开始研究各种建筑风格，学习不同的设计技巧。他希望通过持续设计，为城市带来更多美好空间。艺术在此传递。他【respect/尊重】建筑传统，【innovate/创新】设计方法，【share/分享】创作理念。他【active/积极】参与建筑交流。

李明开始培养年轻的建筑师，传授设计技巧和创作理念。他告诉他们："建筑设计需要【vision/远见】和【devotion/奉献】。我们用设计的能力塑造空间，用建筑的方式服务城市。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【encourage/鼓励】创新精神。年轻建筑师都受到他的【inspire/启发】。

建筑梦想，让李明感受到创作的魅力和空间的价值。他决定继续深耕这个领域，用设计能力塑造空间，用建筑方式服务城市。这是他选择的道路，也是他热爱的生活。每一次设计，都是一次对空间的诠释。这是他的使命。他【determine/决心】一生【devote/奉献】给建筑事业，【create/创作】更多优秀建筑，让城市更加【beautiful/美丽】，【build/建立】属于自己的建筑传奇。他【firmly/坚定地】相信设计的力量。他【promise/承诺】会一直坚持创作。

某次建筑论坛上，李明分享了他设计理念："建筑是城市的塑造者。我们用设计的能力，让城市空间更加美好。"同行们深受启发，开始思考建筑的深层意义。论坛现场【applaud/响起掌声】。他用亲身经历证明，坚持的力量可以创作佳作，建筑的精神可以服务城市。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。`,

  '景观设计': `园林景观设计公司的工作室里，景观设计师王华正【plan/规划】着新的景观方案。作为一名景观设计师，她每天都在创造自然与人文的和谐空间。每一个景观都需要【meticulous/细致】的设计，每一处景观都承载着自然的【value/价值】。她深知景观设计的【significance/意义】。工作室里【quiet/安静】，她【focus/专注】于设计细节。她【early/早早】来到工作室，每天都很【busy/忙碌】。她【always/总是】保持高度的创作热情。

今天的工作是设计一处城市公园的景观方案。王华注意到植物配置还不够【reasonable/合理】，需要反复调整。她反复推敲方案，寻找最优的景观表达。这是一个需要【patience/耐心】的过程。她【never/从不】放弃对完美的追求，【always/总是】力求更好的效果。她【try/尝试】不同的植物搭配，寻找最佳方案。

设计过程中，王华遇到了一个难题。景观动线设计不够【smooth/流畅】，影响游览体验。她【worried/担忧】地思考解决方案，尝试了多种动线布局。最终，她通过【careful/仔细】的空间规划，成功优化了景观动线。突破需要智慧。她【finally/终于】找到了答案。她【excited/激动】地完成方案。景观【perfectly/完美】呈现美感。

方案完成后，王华开始准备项目汇报。她制作景观效果图，向客户展示设计理念。汇报需要投入。她【careful/仔细】地准备材料，【accurate/精确】表达理念。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间完善汇报。

项目汇报时，王华向客户展示了景观方案。客户的【warm/热烈】反响让她感到欣慰。她的设计获得了高度评价，被认为是充满自然美感的佳作。汇报【successful/成功】。她【proud/自豪】地看着客户认可。每个人都为她的【achieve/成就】感到高兴。

汇报结束后，王华感到一种深深的【satisfaction/满足】。创作的喜悦让她感到欣慰，但她明白，这只是景观生涯的一个项目。她【humbly/谦逊地】接受客户的赞誉。成功在此【mark/标记】。她【continue/继续】追求更高的景观境界。

她明白，景观设计不仅是职业，更是自然的表达者。她开始研究各种园林风格，学习不同的设计技巧。她希望通过持续设计，为城市带来更多绿色空间。艺术在此传递。她【respect/尊重】自然规律，【innovate/创新】设计方法，【share/分享】景观理念。她【active/积极】参与景观交流。

王华开始培养年轻的景观设计师，传授设计技巧和创作理念。她告诉他们："景观设计需要【respect/尊重】和【devotion/奉献】。我们用设计的能力创造景观，用自然的方式服务城市。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】创新精神。年轻设计师都受到她的【inspire/启发】。

园林之美，让王华感受到创作的魅力和自然的价值。她决定继续深耕这个领域，用设计能力创造景观，用自然方式服务城市。这是她选择的道路，也是她热爱的生活。每一次设计，都是一次对自然的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给景观事业，【create/创作】更多优秀景观，让城市更加【green/绿色】，【build/建立】属于自己的景观传奇。她【firmly/坚定地】相信自然的力量。她【promise/承诺】会一直坚持创作。

某次景观论坛上，王华分享了她设计理念："景观是自然的表达者。我们用设计的能力，让城市更加亲近自然。"同行们深受启发，开始思考景观的深层意义。论坛现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以创作佳作，自然的精神可以服务城市。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '室内设计': `室内设计工作室里，设计师陈明正【create/创作】着新的室内设计方案。作为一名室内设计师，他每天都在为人们创造温馨的家居空间。每一个空间都需要【careful/仔细】的规划，每一个家都承载着生活的【value/价值】。他深知室内设计的【significance/意义】。工作室里【busy/忙碌】，他【focus/专注】于设计细节。他【early/早早】来到工作室，每天都很【intense/紧张】。他【always/总是】保持高度的创作热情。

今天的工作是完成一套住宅的室内设计。陈明注意到空间布局还不够【reasonable/合理】，需要反复调整。他反复推敲方案，寻找最优的空间表达。这是一个需要【patience/耐心】的过程。他【never/从不】放弃对完美的追求，【always/总是】力求更好的方案。他【try/尝试】不同的布局方式，寻找最佳表达。

设计过程中，陈明遇到了一个难题。色彩搭配不够【harmonious/和谐】，影响整体效果。他【worried/担忧】地思考解决方案，尝试了多种色彩组合。最终，他通过【meticulous/细致】的色彩规划，成功提升了空间美感。突破需要智慧。他【finally/终于】找到了答案。他【excited/激动】地完成方案。空间【perfectly/完美】呈现美感。

方案完成后，陈明开始准备项目汇报。他制作效果图，向客户展示设计理念。汇报需要投入。他【careful/仔细】地准备材料，【accurate/精确】表达理念。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量时间完善汇报。

项目汇报时，陈明向客户展示了室内方案。客户的【warm/热烈】反响让他感到欣慰。他的设计获得了高度评价，被认为是充满温馨感的佳作。汇报【successful/成功】。他【proud/自豪】地看着客户认可。每个人都为他的【achieve/成就】感到高兴。

汇报结束后，陈明感到一种深深的【satisfaction/满足】。创作的喜悦让他感到欣慰，但他明白，这只是设计生涯的一个项目。他【humbly/谦逊地】接受客户的赞誉。成功在此【mark/标记】。他【continue/继续】追求更高的设计境界。

他明白，室内设计不仅是职业，更是生活的表达者。他开始研究各种室内风格，学习不同的设计技巧。他希望通过持续设计，为家庭带来更多温馨空间。艺术在此传递。他【respect/尊重】生活需求，【innovate/创新】设计方法，【share/分享】设计理念。他【active/积极】参与设计交流。

陈明开始培养年轻的室内设计师，传授设计技巧和创作理念。他告诉他们："室内设计需要【understanding/理解】和【devotion/奉献】。我们用设计的能力创造温馨，用空间的方式服务生活。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【encourage/鼓励】创新精神。年轻设计师都受到他的【inspire/启发】。

温馨之家，让陈明感受到创作的魅力和生活价值。他决定继续深耕这个领域，用设计能力创造温馨，用空间方式服务生活。这是他选择的道路，也是他热爱的生活。每一次设计，都是一次对生活的诠释。这是他的使命。他【determine/决心】一生【devote/奉献】给室内事业，【create/创作】更多温馨空间，让家庭更加【comfortable/舒适】，【build/建立】属于自己的设计传奇。他【firmly/坚定地】相信生活的力量。他【promise/承诺】会一直坚持创作。

某次设计论坛上，陈明分享了他设计理念："室内是生活的表达者。我们用设计的能力，让家庭空间更加温馨。"同行们深受启发，开始思考设计的深层意义。论坛现场【applaud/响起掌声】。他用亲身经历证明，坚持的力量可以创作佳作，生活的精神可以服务家庭。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。`,

  '规划未来': `城市规划研究院的办公室里，规划师张伟正【plan/规划】着城市的发展蓝图。作为一名城市规划师，他每天都在为城市的未来描绘远景。每一个规划都需要【meticulous/细致】的考量，每一个区域都承载着城市的【value/价值】。他深知城市规划的【magnitude/重大】责任。办公室里【busy/忙碌】，他【focus/专注】于规划方案。他【early/早早】来到办公室，每天都很【intense/紧张】。他【always/总是】保持高度的责任感。

今天的工作是完成一个区域的总体规划方案。张伟注意到功能分区还不够【reasonable/合理】，需要反复调整。他反复推敲方案，寻找最优的空间布局。这是一个需要【patience/耐心】和智慧的过程。他【never/从不】放弃对完美的追求，【always/总是】力求更好的方案。他【try/尝试】不同的规划理念，寻找最佳布局。

规划过程中，张伟遇到了一个难题。交通组织不够【efficient/高效】，影响城市运转。他【worried/担忧】地思考解决方案，尝试了多种交通方案。最终，他通过【careful/仔细】的路网规划，成功优化了交通组织。突破需要智慧。他【finally/终于】找到了答案。他【excited/激动】地完成方案。规划【perfectly/完美】呈现理念。

方案完成后，张伟开始准备项目汇报。他制作规划图，向领导和公众展示规划理念。汇报需要投入。他【careful/仔细】地准备材料，【accurate/精确】表达理念。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量时间完善汇报。

项目汇报时，张伟向领导和公众展示了规划方案。公众的【warm/热烈】反响让他感到欣慰。他的规划获得了高度评价，被认为是具有前瞻性的佳作。汇报【successful/成功】。他【proud/自豪】地看着公众认可。每个人都为他的【achieve/成就】感到敬佩。

汇报结束后，张伟感到一种深深的【satisfaction/满足】。创作的喜悦让他感到欣慰，但他明白，这只是规划生涯的一个项目。他【humbly/谦逊地】接受公众的赞誉。成功在此【mark/标记】。他【continue/继续】追求更高的规划境界。

他明白，城市规划不仅是职业，更是未来的描绘者。他开始研究各种规划理论，学习不同的城市模式。他希望通过持续规划，为城市带来更美好的未来。责任在此传递。他【respect/尊重】城市发展规律，【innovate/创新】规划方法，【share/分享】规划理念。他【active/积极】参与规划交流。

张伟开始培养年轻的规划师，传授规划技巧和创作理念。他告诉他们："城市规划需要【vision/远见】和【devotion/奉献】。我们用规划的能力描绘未来，用蓝图的方式服务城市。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【encourage/鼓励】规划精神。年轻规划师都受到他的【inspire/启发】。

城市蓝图，让张伟感受到创作的魅力和未来的价值。他决定继续深耕这个领域，用规划能力描绘未来，用蓝图方式服务城市。这是他选择的道路，也是他热爱的使命。每一次规划，都是一次对未来的诠释。这是他的责任。他【determine/决心】一生【devote/奉献】给规划事业，【create/规划】更多优秀蓝图，让城市更加【prosperous/繁荣】，【build/建立】属于自己的规划传奇。他【firmly/坚定地】相信未来的力量。他【promise/承诺】会一直坚持规划。

某次规划论坛上，张伟分享了他规划理念："规划是未来的描绘者。我们用规划的能力，让城市拥有更美好的明天。"同行们深受启发，开始思考规划的深层意义。论坛现场【applaud/响起掌声】。他用亲身经历证明，坚持的力量可以描绘未来，规划的精神可以服务城市。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。`,

  '桥梁工程': `桥梁工程公司的设计室里，工程师刘芳正【design/设计】着新的桥梁方案。作为一名桥梁工程师，她每天都在为交通建设贡献力量。每一座桥梁都需要【meticulous/细致】的计算，每一项工程都承载着交通的【value/价值】。她深知桥梁工程的【significance/意义】。设计室里【busy/忙碌】，她【focus/专注】于结构计算。她【early/早早】来到设计室，每天都很【intense/紧张】。她【always/总是】保持高度的责任感。

今天的工作是完成一座大桥的结构设计。刘芳注意到桥梁结构还不够【stable/稳定】，需要反复验算。她反复计算数据，寻找最优的结构方案。这是一个需要【patience/耐心】和严谨的过程。她【never/从不】放弃对完美的追求，【always/总是】力求更好的方案。她【try/尝试】不同的结构形式，寻找最佳方案。

设计过程中，刘芳遇到了一个难题。桥梁跨度计算不够【accurate/精确】，影响结构安全。她【worried/担忧】地思考解决方案，尝试了多种计算方法。最终，她通过【careful/仔细】的结构分析，成功优化了桥梁设计。突破需要智慧。她【finally/终于】找到了答案。她【excited/激动】地完成方案。桥梁【perfectly/完美】呈现结构。

方案完成后，刘芳开始准备技术评审。她整理计算资料，向专家展示设计方案。评审需要投入。她【careful/仔细】地准备材料，【accurate/精确】表达理念。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间完善评审。

技术评审时，刘芳向专家展示了桥梁方案。专家的【warm/热烈】反响让她感到欣慰。她的设计获得了高度评价，被认为是技术先进的佳作。评审【successful/成功】。她【proud/自豪】地看着专家认可。每个人都为她的【achieve/成就】感到敬佩。

评审结束后，刘芳感到一种深深的【satisfaction/满足】。创作的喜悦让她感到欣慰，但她明白，这只是工程生涯的一个项目。她【humbly/谦逊地】接受专家的赞誉。成功在此【mark/标记】。她【continue/继续】追求更高的技术境界。

她明白，桥梁工程不仅是职业，更是交通的建设者。她开始研究各种桥梁形式，学习不同的结构技术。她希望通过持续设计，为交通带来更多便捷通道。技术在此传递。她【respect/尊重】工程规范，【innovate/创新】结构方法，【share/分享】技术理念。她【active/积极】参与工程交流。

刘芳开始培养年轻的工程师，传授设计技巧和工程理念。她告诉他们："桥梁工程需要【rigor/严谨】和【devotion/奉献】。我们用设计的能力跨越障碍，用桥梁的方式服务交通。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】技术精神。年轻工程师都受到她的【inspire/启发】。

跨越天堑，让刘芳感受到创作的魅力和技术价值。她决定继续深耕这个领域，用设计能力跨越障碍，用桥梁方式服务交通。这是她选择的道路，也是她热爱的使命。每一次设计，都是一次对技术的诠释。这是她的责任。她【determine/决心】一生【devote/奉献】给桥梁事业，【create/设计】更多优秀桥梁，让交通更加【convenient/便捷】，【build/建立】属于自己的工程传奇。她【firmly/坚定地】相信技术的力量。她【promise/承诺】会一直坚持设计。

某次工程论坛上，刘芳分享了她设计理念："桥梁是交通的建设者。我们用设计的能力，让天堑变通途。"同行们深受启发，开始思考工程的深层意义。论坛现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以跨越障碍，技术的精神可以服务交通。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`
};

// 生成学习版HTML
function generateLearningHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="w">${word}(${meaning})📢</span>`;
  });

  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 学习版</title>
<style>
  :root {
    --pill: #E1BEE7;
    --accent: #9C27B0;
    --bg-soft: #F3E5F5;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b;
    background: linear-gradient(180deg, var(--bg-soft), #ffffff);
    background-attachment: fixed;
  }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 999px;
    background: var(--accent);
    color: #fff;
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story {
    background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05);
  }
  section.story .step {
    display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px;
  }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 4px; text-align: justify; }
  .w {
    background-color: #E1BEE7;
    border-radius: 999px;
    padding: 0.12em 0.55em;
    margin: 0 1px;
    white-space: nowrap;
    color: #333;
    font-weight: 600;
  }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词</div>
      <h1>${config.title}</h1>
      <p class="sub">${config.tags}</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story${String(storyIndex).padStart(2, '0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">
${paragraphsHTML}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 学习版　|　看故事记单词</footer>
  </div>
</body>
</html>`;
}

// 生成复习版HTML
function generateReviewHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${meaning}</span>)</span>`;
  });

  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 复习版</title>
<style>
  :root { --pill-review: #C8E6C9; --accent: #4CAF50; --bg-soft: #E8F5E9; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; padding: 0; width: 100%; min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b; background: linear-gradient(180deg, var(--bg-soft), #ffffff); background-attachment: fixed; }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge { display: inline-block; padding: 5px 16px; border-radius: 999px;
    background: var(--accent); color: #fff; font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story { background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05); }
  section.story .step { display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px; }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 12px; text-align: justify; }
  .r { background-color: #C8E6C9; border-radius: 999px; padding: 2px 8px; margin: 0 2px;
    white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .r:hover { opacity: 0.85; }
  .r .h { color: transparent; user-select: none; }
  .r.show .h { color: #333; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词 · 复习版</div>
      <h1>${config.title}</h1>
      <p class="sub">${config.tags}</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story${String(storyIndex).padStart(2, '0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">
${paragraphsHTML}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;
}

// 主函数
function main() {
  const outputDir = path.join(__dirname, '../result');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  storyConfigs.forEach((config, index) => {
    const content = storyContents[config.subtitle];

    if (!content) {
      console.log(`警告：缺少 "${config.subtitle}" 的故事内容`);
      return;
    }

    const num = String(81 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 81 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 81 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事81-85，词汇量50-60）');
}

main();