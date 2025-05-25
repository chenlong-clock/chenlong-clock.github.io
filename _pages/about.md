---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a second-year M.S. student at the Natural Language Processing and Knowledge Engineering Group, Institute of Automation, Chinese Academy of Sciences, advised by [Prof. Yubo Chen](https://people.ucas.ac.cn/~yubochen) and [Prof. Jun Zhao](https://people.ucas.ac.cn/~zhaojun). My research interests include **LLM Unlearning**, **Reinforcement Learning**, **Continual Learning for LLMs**, and **Complex Event Understanding**. If you are interested in my work or want to collaborate, please feel free to contact me via email: zhangchenlong2023\[at\]ia\[dot\]ac\[dot\]cn.

# 🔥 News
- *2025.02*: 🎉 ''DTELS: Towards Dynamic Granularity of Timeline Summarization'' is accepted to NAACL 2025 main.
- *2024.10*: 🎉 ''Continual Few-shot Event Detection via Hierarchical Augmentation Networks'' is accepted at COLING 2024 main.


# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv Preprint</div><img src='images/RULE.png' alt="RULE" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**RULE: Reinforcement Unlearning Achieves Forget-retain Pareto Optimality**](https://github.com/chenlong-clock/RULE-Unlearn)  
**Chenlong Zhang**, Zhuoran Jin, Hongbang Yuan, Jiaheng Wei, Tong Zhou, Kang Liu, Jun Zhao, Yubo Chen

We propose RULE, an on-policy RL-based unlearning framework that performs refusal boundary optimization using only 12% forget data and 8% synthetic queries. The method introduces naturalness as a novel evaluation dimension and achieves Pareto-optimal trade-offs between forgetting and utility retention.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2025</div><img src='images/DTELS.png' alt="DTELS" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**DTELS: Towards Dynamic Granularity of Timeline Summarization**](https://aclanthology.org/2025.naacl-long.136.pdf)  
**Chenlong Zhang**, Tong Zhou, Pengfei Cao, Zhuoran Jin, Yubo Chen, Kang Liu, Jun Zhao

We introduce DTELS, a framework for timeline summarization with controllable granularity levels. Alongside, we release the DTELS-Bench dataset containing 543 topics and 55k articles annotated at three granularity levels. We further propose event-centric evaluation metrics and reveal that existing LLMs struggle with maintaining temporal consistency across granularities.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">COLING 2024</div><img src='images/CFED.png' alt="CFED" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Continual Few-shot Event Detection via Hierarchical Augmentation Networks**](https://github.com/chenlong-clock/CFED-HANet)  
**Chenlong Zhang**, Pengfei Cao, Yubo Chen, Kang Liu, Zhiqiang Zhang, Mengshu Sun, Jun Zhao

We present HANet, a hierarchical augmentation network for continual few-shot event detection. By leveraging one-exemplar learning and contrastive augmentation, HANet achieves up to +8.4% micro-F1 improvement over prior methods, outperforming both full model retraining and GPT-3.5-based baselines. 
</div></div>


# 🏆 Honors and Awards

- *May 2024* Merit Student, University of Chinese Academy of Sciences  
- *Jun. 2023* Outstanding Graduate, Henan Province, Provincial Education Department  
- *Jun. 2023* Excellent Bachelor's Thesis Award, Henan University  
- *Dec. 2022* China National Scholarship (**Top 0.2% nationwide**), Ministry of Education  
- *Apr. 2022* Excellent Completion, National Undergraduate Innovation and Entrepreneurship Program (Project Leader)  
- *Dec. 2021* China National Scholarship (**Top 0.2% nationwide**), Ministry of Education  
- *Jan. 2021* Bluesky Scholarship (**Top 0.5%**), Henan University  
- *Dec. 2020* China National Scholarship (**Top 0.2% nationwide**), Ministry of Education  


# 🎤 Academic Services
I actively serve in the NLP community as a shared task organizer and reviewer.
- Task Co-organizer, **SemEval 2026** Shared Task: *Abductive Event Reasoning: Towards Real-World Event Causal Inference for Large Language LLMs*
- Task Organizer, **CCKS 2025** Shared Task: *Event Timeline Generation for Social Media*
- Conference Reviewer: **NLPCC 2025**


# 📖 Educations
- *2023 – Present*, **Institute of Automation, Chinese Academy of Sciences**, Beijing — M.S. in Pattern Recognition and Intelligent Systems (GPA: 3.82/4.0)  
- *2019 – 2023*, **Henan University**, Henan — B.S. in Software Engineering (GPA: 3.84/4.0, Rank: 1/388)


# 💻 Internships
- *Feb. 2025 – May. 2025*, **The Hong Kong University of Science and Technology (Guangzhou)** — *Research Intern*, advised by [Jiaheng Wei](https://sites.google.com/ucsc.edu/jiahengwei)
- *Sep. 2022 – Jul. 2023*, **NLPR, Institute of Automation, Chinese Academy of Sciences** — *Research Intern*, advised by [Pengfei Cao](https://cpf-nlpr.github.io/)
