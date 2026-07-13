const fs = require('fs');
const path = require('path');

// 故事配置（故事71-75）- 使用高级词汇
const storyConfigs = [
  { theme: '量子物理', title: '量子奥秘', subtitle: '物理前沿', tags: '量子 · 物理 · 科学' },
  { theme: '基因科学', title: '基因密码', subtitle: '生命奥秘', tags: '基因 · 生物 · 科学' },
  { theme: '海洋探索', title: '深海秘境', subtitle: '海洋征程', tags: '海洋 · 探索 · 冒险' },
  { theme: '极地考察', title: '极地探险', subtitle: '冰雪征途', tags: '极地 · 科考 · 勇气' },
  { theme: '纳米科技', title: '纳米世界', subtitle: '微观奇迹', tags: '纳米 · 科技 · 创新' }
];

// 所有故事内容 - 使用高级词汇
const storyContents = {
  '物理前沿': `量子物理研究院的实验室里，物理学家李明正【investigate/深入研究】着量子纠缠的现象。作为一名量子物理学家，他每天都在探索微观世界的奥秘。每一个实验都需要【sophisticated/精密复杂】的设计，每一个发现都承载着科学的【significance/重要性】。他深知量子研究的【magnitude/重大】意义。实验室里【advanced/先进精密】的量子设备运转着，他【devote/致力于】科学研究。他【persistently/坚持不懈地】探索机理，每天都很【intense/紧张投入】。他【always/总是】保持高度的科学精神。

今天的研究任务是验证一个新的量子理论假设。李明注意到实验数据还存在【subtle/细微的】偏差，需要【meticulous/细致】的分析。他反复设计验证实验，寻找最准确的测量方法。这是一个需要【precision/精确】和创新的过程。他【never/从不】放弃对真理的追求，【continuously/持续地】优化实验。他【elaborate/详细设计】实验流程，【collaborate/协作】团队攻关。量子研究【necessitate/需要】严谨与创新。

研究过程中，李明遇到了一个【substantial/重大的】挑战。量子态的稳定性难以控制，实验面临技术瓶颈。他【tensely/紧张地】分析问题根源，尝试了多种控制方法。最终，他通过【innovative/创新性的】技术手段，成功实现了量子态的稳定控制，突破了实验瓶颈。突破需要智慧。他【methodically/有条不紊地】验证方案，【eventually/最终】攻克难题。他【thrilled/激动不已】地记录成果。技术【remarkably/显著地】超越基准。

突破后，李明开始撰写学术论文。他【synthesize/综合整理】研究成果，【evaluate/评估】理论意义，【articulate/清晰阐述】发现价值。每一篇论文都需要【rigorous/严谨】的把关。论文撰写需要投入。他【meticulously/细致地】核对数据，【precisely/精确地】描述发现。他【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。他【invest/投入】大量时间完善论文。

论文发表后，李明的量子研究引起了物理学界的高度关注。同行专家对他的发现给予了【substantial/重大】肯定，被认为是量子领域的【breakthrough/重大突破】。他看到了科学研究的价值。论文【remarkably/显著地】推动领域发展。他【tense/紧张】但【confident/自信】，成功发表了成果。学术界【eagerly/热切地】关注研究。他【proudly/自豪地】看着论文影响。期刊【extensively/广泛地】引用。

发表后，李明感到一种深深的【accomplishment/成就感】。发现的喜悦让他感到欣慰，但他明白，这只是量子研究的阶段性成果。他【modestly/谦逊地】接受学术界的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着研究影响，知道这是探索的回报。他【proceed/继续】追求更高的科学目标。每个人都为这个【achievement/成就】感到振奋。

他明白，量子研究不仅是职业，更是揭示宇宙奥秘的使命。他开始【contemplate/深入思考】量子本质，【investigate/深入研究】物理前沿。他希望通过持续研究，推动人类对微观世界的理解。知识在此【accumulate/积累】。他【respect/尊重】科学规律，【implement/实施】研究计划，【contribute/贡献】科学力量。他【actively/积极地】参与学术交流。他【frequently/频繁地】出席物理学会议。

李明开始培养年轻的物理学家，传授研究方法和科学精神。他告诉他们："量子研究需要【intellectual/智力的】严谨和【perseverance/毅力】。我们用科学的力量揭示奥秘，用探索的精神拓展认知边界。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】探索精神。他【successfully/成功地】培养了多位优秀物理学家。年轻物理学家都受到他的【inspire/启发】。

量子奥秘，让李明感受到探索的魅力和发现的价值。他决定继续深耕这个领域，用科学能力揭示奥秘，用探索精神拓展边界。这是他选择的道路，也是他热爱的使命。每一次实验，都是一次对微观的探索。这是他的责任。他【determine/决心】一生【devote/奉献】给量子事业，【discover/发现】更多物理真理，让人类认知更加【advanced/进步】，【establish/建立】属于自己的科学传奇。他【firmly/坚定地】相信科学的力量。他【pledge/承诺】会一直坚持探索。

某次物理学大会上，李明分享了他研究理念："量子是揭示宇宙奥秘的钥匙。我们用科学的力量，探索微观世界的边界。"同行们深受启发，开始思考量子研究的深层意义。他的故事激励着更多物理学家追求更高的境界。大会现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以发现真理，科学的精神可以拓展认知。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。物理【domain/领域】需要这样的探索。`,

  '生命奥秘': `基因科学研究中心的实验室里，生物学家王华正【analyze/深入分析】着基因序列的数据。作为一名基因科学家，她每天都在探索生命的密码。每一个基因都需要【meticulous/细致】的解读，每一个发现都承载着生命的【significance/意义】。她深知基因研究的【magnitude/重大】价值。实验室里【sophisticated/精密复杂】的测序仪器运转着，她【devote/致力于】生命研究。她【persistently/坚持不懈地】分析数据，每天都很【focused/专注投入】。她【always/总是】保持高度的科学严谨。

今天的研究任务是解读一个关键基因的功能。王华注意到基因表达模式还存在【intricate/复杂】的问题，需要【systematic/系统性】的研究。她反复设计实验方案，寻找最准确的功能验证方法。这是一个需要【expertise/专业知识】和耐心的过程。她【never/从不】放弃对真相的追求，【continuously/持续地】完善方案。她【elaborate/详细设计】实验流程，【collaborate/协作】团队攻关。基因研究【necessitate/需要】专业与严谨。

研究过程中，王华遇到了一个【substantial/重大的】难题。基因调控机制难以解析，研究面临技术瓶颈。她【anxiously/焦虑地】分析问题根源，尝试了多种解析方法。最终，她通过【innovative/创新性的】实验设计，成功揭示了基因调控机制，突破了研究瓶颈。突破需要智慧。她【methodically/有条不紊地】验证发现，【eventually/最终】揭示机制。她【thrilled/激动不已】地记录成果。机制【remarkably/显著地】解释功能。

突破后，王华开始撰写学术论文。她【synthesize/综合整理】研究成果，【evaluate/评估】生物学意义，【articulate/清晰阐述】发现价值。每一篇论文都需要【rigorous/严谨】的把关。论文撰写需要投入。她【meticulously/细致地】核对数据，【precisely/精确地】描述发现。她【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。她【invest/投入】大量时间完善论文。

论文发表后，王华的基因研究引起了生物学界的高度关注。同行专家对她的发现给予了【substantial/重大】肯定，被认为是基因领域的【milestone/里程碑】。她看到了生命研究的价值。论文【remarkably/显著地】推动领域发展。她【tense/紧张】但【confident/自信】，成功发表了成果。学术界【eagerly/热切地】关注研究。她【proudly/自豪地】看着论文影响。期刊【extensively/广泛地】引用。

发表后，王华感到一种深深的【accomplishment/成就感】。发现的喜悦让她感到欣慰，但她明白，这只是基因研究的阶段性成果。她【modestly/谦逊地】接受学术界的认可。成功在此【manifest/显现】。她【proudly/自豪地】看着研究影响，知道这是探索的回报。她【proceed/继续】追求更高的生命研究目标。每个人都为这个【achievement/成就】感到振奋。

她明白，基因研究不仅是职业，更是揭示生命奥秘的使命。她开始【contemplate/深入思考】生命本质，【investigate/深入研究】基因功能。她希望通过持续研究，为人类健康带来新的解决方案。知识在此【accumulate/积累】。她【respect/尊重】生命规律，【implement/实施】研究计划，【contribute/贡献】生命科学力量。她【actively/积极地】参与学术交流。她【frequently/频繁地】出席生物学会议。

王华开始培养年轻的生物学家，传授研究方法和科学精神。她告诉他们："基因研究需要【integrity/严谨正直】和【dedication/奉献精神】。我们用科学的力量揭示生命奥秘，用探索的精神服务人类健康。"她的指导帮助了许多新人成长。传承在此延续。她【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】探索精神。她【successfully/成功地】培养了多位优秀生物学家。年轻生物学家都受到她的【inspire/启发】。

基因密码，让王华感受到探索的魅力和发现的价值。她决定继续深耕这个领域，用科学能力揭示奥秘，用探索精神服务健康。这是她选择的道路，也是她热爱的使命。每一次研究，都是一次对生命的探索。这是她的责任。她【determine/决心】一生【devote/奉献】给基因事业，【discover/发现】更多生命真理，让人类健康更加【improved/改善】，【establish/建立】属于自己的科学传奇。她【firmly/坚定地】相信科学的力量。她【pledge/承诺】会一直坚持探索。

某次生物学大会上，王华分享了她研究理念："基因是揭示生命奥秘的密码。我们用科学的力量，探索生命的本质。"同行们深受启发，开始思考基因研究的深层意义。她的故事激励着更多生物学家追求更高的境界。大会现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。她用亲身经历证明，坚持的力量可以发现真理，科学的精神可以揭示奥秘。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。生物【domain/领域】需要这样的探索。`,

  '海洋征程': `海洋科考船的实验室里，海洋学家陈明正【investigate/深入研究】着深海生态系统的数据。作为一名海洋学家，他每天都在探索海洋的奥秘。每一个样本都需要【meticulous/细致】的分析，每一次潜潜都承载着探索的【aspiration/渴望】。他深知海洋研究的【magnitude/重大】意义。实验室里【sophisticated/精密复杂】的探测仪器运转着，他【devote/致力于】海洋探索。他【persistently/坚持不懈地】追踪数据，每天都很【intense/紧张投入】。他【always/总是】保持高度的探索精神。

今天的科考任务是探索深海未知区域。陈明注意到海底地形还存在【intricate/复杂】的变化，需要【comprehensive/全面】的探测。他反复规划潜潜路线，寻找最优探索方案。这是一个需要【courage/勇气】和智慧的过程。他【never/从不】放弃对未知的好奇，【continuously/持续地】优化方案。他【elaborate/详细规划】潜潜路径，【collaborate/协作】团队配合。海洋探索【necessitate/需要】勇气与智慧。

探索过程中，陈明遇到了一个【critical/关键性的】挑战。深海探测设备出现故障，潜潜任务面临中止风险。他【tensely/紧张地】分析故障原因，尝试了多种修复方法。最终，他通过【innovative/创新性的】应急方案，成功修复设备故障，确保潜潜任务顺利完成。突破需要冷静。他【methodically/有条不紊地】执行修复，【ultimately/最终】恢复探测。他【relieved/释然】地看到设备运转。方案【effectively/有效地】解决问题。

潜潜完成后，陈明开始整理深海探索数据。他【synthesize/综合整理】探测结果，【evaluate/评估】生态发现，【document/详细记录】海洋奥秘。每一份报告都需要【rigorous/严谨】的审核。报告撰写需要投入。他【meticulously/细致地】核对数据，【precisely/精确地】描述发现。他【apprehensive/忐忑】但同时也【excited/兴奋】。他【invest/投入】大量时间完善报告。

探索成果发布会上，陈明向公众展示深海发现。社会的【enthusiastic/热烈】反响让他感到欣慰。他的探索获得了高度认可，被认为是海洋科考的【milestone/里程碑】。发布会【spectacular/精彩壮观】。他【tense/紧张】但【confident/自信】，成功地展示了成果。公众【eagerly/热切地】关注海洋奥秘。他【proudly/自豪地】介绍探索意义。媒体【extensively/广泛地】报道。

发布后，陈明感到一种深深的【accomplishment/成就感】。探索的喜悦让他感到欣慰，但他明白，这只是海洋征程的阶段性成果。他【modestly/谦逊地】接受社会的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着公众反响，知道这是探索的回报。他【proceed/继续】追求更高的海洋目标。每个人都为这个【achievement/成就】感到振奋。

他明白，海洋探索不仅是职业，更是揭示地球奥秘的使命。他开始【contemplate/深入思考】海洋本质，【investigate/深入研究】深海生态。他希望通过持续探索，推动人类对海洋世界的理解。知识在此【accumulate/积累】。他【respect/尊重】海洋生态，【implement/实施】探索战略，【contribute/贡献】海洋科学力量。他【actively/积极地】参与国际交流。他【frequently/频繁地】出席海洋学会议。

陈明开始培养年轻的海洋学家，传授研究方法和探索精神。他告诉他们："海洋探索需要【courage/勇气】和【perseverance/毅力】。我们用科学的力量揭示深海奥秘，用探索的精神拓展认知边界。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】探索精神。他【successfully/成功地】培养了多位优秀海洋学家。年轻海洋学家都受到他的【inspire/启发】。

深海秘境，让陈明感受到探索的魅力和发现的价值。他决定继续深耕这个领域，用科学能力揭示奥秘，用探索精神拓展边界。这是他选择的道路，也是他热爱的使命。每一次潜潜，都是一次对未知的探索。这是他的责任。他【determine/决心】一生【devote/奉献】给海洋事业，【explore/探索】深海奥秘，让人类认知更加【enriched/丰富】，【establish/建立】属于自己的探索传奇。他【firmly/坚定地】相信探索的力量。他【pledge/承诺】会一直坚持探索。

某次海洋学大会上，陈明分享了他探索理念："海洋是揭示地球奥秘的征途。我们用科学的力量，探索深海的边界。"同行们深受启发，开始思考海洋探索的深层意义。他的故事激励着更多海洋学家追求更高的境界。大会现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以揭示奥秘，勇气的精神可以拓展边界。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。海洋【domain/领域】需要这样的勇气。`,

  '冰雪征途': `极地科考站的实验室里，极地研究员张伟正【monitor/密切监控】着极地环境的变化数据。作为一名极地科学家，他每天都在守护地球的冰雪世界。每一个数据都需要【rigorous/严谨的】分析，每一次观测都承载着气候的【significance/重要性】。他深知极地研究的【magnitude/重大】使命。科考站里【sophisticated/精密先进】的监测设备运转着，他【devote/致力于】极地研究。他【persistently/坚持不懈地】追踪数据，每天都很【intense/紧张投入】。他【always/总是】保持高度的责任感。

今天的科考任务是监测冰川的变化趋势。张伟注意到冰川数据还存在【substantial/实质性的】异常，需要【comprehensive/全面】的分析。他反复收集环境样本，寻找最准确的气候指标。这是一个需要【perseverance/毅力】和智慧的过程。他【never/从不】放弃对真相的追求，【continuously/持续地】优化方案。他【elaborate/详细分析】气候趋势，【collaborate/协作】团队攻关。极地研究【necessitate/需要】责任与智慧。

研究过程中，张伟遇到了一个【critical/关键性的】挑战。极端天气条件限制了观测范围，数据收集面临困难。他【tensely/紧张地】分析应对方案，尝试了多种采集方法。最终，他通过【innovative/创新性的】观测技术，成功突破了天气限制，完成了数据采集任务。突破需要勇气。他【methodically/有条不紊地】执行采集，【ultimately/最终】完成任务。他【relieved/释然】地看到数据完整。方案【effectively/有效地】解决问题。

采集完成后，张伟开始整理极地研究数据。他【synthesize/综合整理】观测结果，【evaluate/评估】气候意义，【articulate/清晰阐述】环境价值。每一份报告都需要【rigorous/严谨】的审核。报告撰写需要投入。他【meticulously/细致地】核对数据，【precisely/精确地】描述发现。他【apprehensive/忧虑】但同时也【optimistic/乐观期待】。他【invest/投入】大量时间完善报告。

研究报告发布后，张伟的极地研究引起了科学界的高度关注。同行专家对他的发现给予了【substantial/重大】肯定，被认为是气候研究的【milestone/里程碑】。他看到了极地科学的价值。研究【remarkably/显著地】推动气候研究。他【tense/紧张】但【confident/自信】，成功发布了成果。科学界【warmly/热烈地】关注极地。他【proudly/自豪地】看着研究成果。媒体【extensively/广泛地】报道。

发布后，张伟感到一种深深的【accomplishment/成就感】。守护的喜悦让他感到欣慰，但他明白，这只是极地研究的阶段性成果。他【modestly/谦逊地】接受科学界的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着研究影响，知道这是责任的回报。他【proceed/继续】追求更高的极地目标。每个人都为这个【achievement/成就】感到敬佩。

他明白，极地研究不仅是职业，更是守护地球的使命。他开始【contemplate/深入思考】气候本质，【investigate/深入研究】冰川变化。他希望通过持续研究，为地球带来更好的未来。责任在此【accumulate/积累】。他【respect/尊重】自然规律，【implement/实施】保护战略，【contribute/贡献】极地科学力量。他【actively/积极地】参与国际交流。他【frequently/频繁地】呼吁气候保护。

张伟开始培养年轻的极地科学家，传授研究方法和环保理念。他告诉他们："极地研究需要【responsibility/责任】和【dedication/奉献】。我们用科学的力量守护地球，用责任的意识保护家园。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】环保精神。他【successfully/成功地】培养了多位优秀科学家。年轻科学家都受到他的【inspire/启发】。

冰雪征途，让张伟感受到责任的魅力和守护的价值。他决定继续深耕这个领域，用科学能力守护地球，用责任意识保护家园。这是他选择的道路，也是他热爱的使命。每一次科考，都是一次对地球的守护。这是他的责任。他【determine/决心】一生【devote/奉献】给极地事业，【protect/保护】冰雪世界，让地球更加【sustainable/可持续】，【establish/建立】属于自己的科考传奇。他【firmly/坚定地】相信责任的力量。他【pledge/承诺】会一直坚守使命。

某次极地科学会议上，张伟分享了他科考理念："极地是守护地球的征途。我们用科学的力量，为人类保护家园的未来。"同行们深受启发，开始思考极地研究的深层意义。他的故事激励着更多科学家追求更高的境界。会议现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以守护地球，责任的意识可以保护家园。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。极地【domain/领域】需要这样的责任。`,

  '微观奇迹': `纳米科技研究院的实验室里，纳米科学家刘芳正【develop/研发】着新型纳米材料。作为一名纳米科学家，她每天都在探索微观世界的奇迹。每一个纳米结构都需要【precise/精确的】设计，每一项突破都承载着科技的【significance/重要性】。她深知纳米研究的【magnitude/重大】价值。实验室里【sophisticated/精密先进】的合成设备运转着，她【devote/致力于】纳米研发。她【persistently/坚持不懈地】优化结构，每天都很【focused/专注投入】。她【always/总是】保持高度的创新精神。

今天的研发任务是合成一种新型纳米颗粒。刘芳注意到合成条件还存在【subtle/细微的】问题，需要【meticulous/细致】的调整。她反复优化合成参数，寻找最精确的控制方案。这是一个需要【precision/精确】和创新的过程。她【never/从不】放弃对完美的追求，【continuously/持续地】改进工艺。她【elaborate/详细设计】合成流程，【collaborate/协作】团队攻关。纳米研发【necessitate/需要】精确与创新。

研发过程中，刘芳遇到了一个【substantial/重大的】挑战。纳米颗粒的尺寸难以控制，合成面临技术瓶颈。她【anxiously/焦虑地】分析问题根源，尝试了多种合成方法。最终，她通过【innovative/创新性的】工艺技术，成功实现了纳米颗粒的精确控制，突破了合成瓶颈。突破需要智慧。她【methodically/有条不紊地】验证方案，【eventually/最终】攻克难题。她【thrilled/激动不已】地记录成果。技术【remarkably/显著地】超越基准。

突破后，刘芳开始撰写技术论文。她【synthesize/综合整理】研发成果，【evaluate/评估】技术意义，【articulate/清晰阐述】创新价值。每一篇论文都需要【rigorous/严谨】的把关。论文撰写需要投入。她【meticulously/细致地】核对数据，【precisely/精确地】描述发现。她【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。她【invest/投入】大量时间完善论文。

论文发表后，刘芳的纳米研究引起了材料学界的高度关注。同行专家对她的发现给予了【substantial/重大】肯定，被认为是纳米领域的【breakthrough/重大突破】。她看到了纳米科技的价值。论文【remarkably/显著地】推动领域发展。她【tense/紧张】但【confident/自信】，成功发表了成果。学术界【eagerly/热切地】关注研究。她【proudly/自豪地】看着论文影响。期刊【extensively/广泛地】引用。

发表后，刘芳感到一种深深的【accomplishment/成就感】。创新的喜悦让她感到欣慰，但她明白，这只是纳米研发的阶段性成果。她【modestly/谦逊地】接受学术界的认可。成功在此【manifest/显现】。她【proudly/自豪地】看着研究影响，知道这是创新的回报。她【proceed/继续】追求更高的纳米目标。每个人都为这个【achievement/成就】感到振奋。

她明白，纳米研发不仅是职业，更是推动科技进步的力量。她开始【contemplate/深入思考】纳米本质，【investigate/深入研究】材料特性。她希望通过持续研发，为科技带来更多创新。知识在此【accumulate/积累】。她【respect/尊重】科学规律，【implement/实施】创新战略，【contribute/贡献】纳米科技力量。她【actively/积极地】参与学术交流。她【frequently/频繁地】出席材料学会议。

刘芳开始培养年轻的纳米科学家，传授研发技巧和创新理念。她告诉他们："纳米研发需要【vision/远见】和【perseverance/毅力】。我们用技术的力量创造奇迹，用创新的精神推动进步。"她的指导帮助了许多新人成长。传承在此延续。她【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】创新精神。她【successfully/成功地】培养了多位优秀科学家。年轻科学家都受到她的【inspire/启发】。

纳米世界，让刘芳感受到创新的魅力和突破的价值。她决定继续深耕这个领域，用技术能力创造奇迹，用创新精神推动进步。这是她选择的道路，也是她热爱的使命。每一次研发，都是一次对微观的创造。这是她的责任。她【determine/决心】一生【devote/奉献】给纳米事业，【create/创造】更多科技奇迹，让人类技术更加【advanced/先进】，【establish/建立】属于自己的纳米传奇。她【firmly/坚定地】相信创新的力量。她【pledge/承诺】会一直坚持研发。

某次材料学大会上，刘芳分享了她研发理念："纳米是创造科技奇迹的世界。我们用技术的力量，推动人类进步的边界。"同行们深受启发，开始思考纳米科技的深层意义。她的故事激励着更多科学家追求更高的境界。大会现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。她用亲身经历证明，坚持的力量可以创造奇迹，创新的精神可以推动进步。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。纳米【domain/领域】需要这样的创新。`
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

    const num = String(71 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 71 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 71 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇，含高级词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事71-75，使用高级词汇）');
}

main();