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


I am now a second-year master student at the Laboratory of Language and Knowledge Computing, Institute of Automation, Chinese Academy of Sciences (expected to graduate in June 2026), advised by Prof. <a href='https://people.ucas.ac.cn/~yubochen'>Yubo Chen(陈玉博)</a> and Prof. <a href='https://people.ucas.ac.cn/~zhaojun'>Jun Zhao(赵军)</a>. Currently, I am working on LLM Unlearning and RL and I am also intereted in LLM Continual Learning and Cmoplex Event Analysis.


# 🔥 News
- *2025.02*: 🎉 ``DTELS: Towards Dynamic Granularity of Timeline Summarization'' is accepted to NAACL 2025 main.
- *2024.10*: 💡 ``Continual Few-shot Event Detection via Hierarchical Augmentation Networks'' is accepted at COLING 2024 main.


# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/500x300.png' alt="RULE" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**RULE: Reinforcement Unlearning Achieves Forget-retain Pareto Optimality**](https://github.com/chenlong-clock/RULE-Unlearn)  
**Chenlong Zhang**, Zhuoran Jin, Hongbang Yuan, Jiaheng Wei, Tong Zhou, Kang Liu, Jun Zhao, Yubo Chen

Proposes a Reinforcement Learning-based unlearning method using boundary optimization with minimal forget data (12%) and synthetic queries (8%). Introduces *naturalness* as a new evaluation dimension, and demonstrates Pareto-optimality between forgetting and retention.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2025</div><img src='images/500x300.png' alt="DTELS" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**DTELS: Towards Dynamic Granularity of Timeline Summarization**](https://aclanthology.org/2025.naacl-long.136.pdf)  
**Chenlong Zhang**, Tong Zhou, Pengfei Cao, Zhuoran Jin, Yubo Chen, Kang Liu, Jun Zhao

Introduces a new task of timeline summarization controllable by granularity levels, along with the DTELS-Bench dataset (543 topics, 55k articles, 3 granularity levels). Proposes event-centric metrics and evaluates LLMs' struggles with temporal consistency.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">COLING 2024</div><img src='images/500x300.png' alt="CFED" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Continual Few-shot Event Detection via Hierarchical Augmentation Networks**](https://github.com/chenlong-clock/CFED-HANet)  
**Chenlong Zhang**, Pengfei Cao, Yubo Chen, Kang Liu, Zhiqiang Zhang, Mengshu Sun, Jun Zhao

Proposes HANet, which enables continual few-shot event detection via one-exemplar and contrastive augmentation. Achieves up to +8.4% micro-F1 over previous methods and outperforms full retraining and GPT-3.5 baselines.
</div></div>


# 🏆 Honors and Awards
- *2024*, University of CAS Merit Student  
- *2023*, Outstanding Graduate of Henan Province  
- *2023*, Excellent Bachelor Thesis Award, Henan University  
- *2020–2021*, Bluesky Scholarship (Top 0.5%) ×2  
- *2019–2023*, National Scholarship (Top 0.2%) ×3  

# 🎤 Academic Services
- Reviewer for **NLPCC**
- Task Organizer, **CCKS 2025** Shared Task: *Contextual Event Timeline Generation for Social Media*
- Task Co-organizer, **SemEval 2026** Shared Task: *Abductive Event Reasoning (AER)*

# 📖 Educations
- *2023 – Present*, **Institute of Automation, CAS**, Beijing — M.S. in NLKE Group (GPA: 3.82/4.0)  
- *2019 – 2023*, **Henan University**, Henan — B.S. in Software Engineering (GPA: 3.84/4.0, Rank: 1/388)


# 💻 Internships
- *Sep 2022 – Jul 2023*, **NLPR, Institute of Automation, Chinese Academy of Sciences** — *Research Intern*, advised by [Pengfei Cao](https://cpf-nlpr.github.io/)
- *Feb 2025 – May 2025*, **The Hong Kong University of Science and Technology (Guangzhou)** — *Research Intern*, advised by [Jiaheng Wei](https://sites.google.com/ucsc.edu/jiahengwei)
