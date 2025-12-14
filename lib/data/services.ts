export interface SubService {
  slug: string;
  title: string;
  summary: string;
  cardImage: string;
  heroImage: string;
  whatItIs: string[];
  whatWeDo: string[];
  tools: string[];
  roles: string[];
}

export interface ServiceCategory {
  categorySlug: string;
  categoryName: string;
  accentColor: string;
  description: string;
  subservices: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    categorySlug: 'engineering',
    categoryName: 'Engineering',
    accentColor: '#3b82f6',
    description: 'Advanced automotive and embedded systems engineering solutions for next-generation mobility',
    subservices: [
      {
        slug: 'adas',
        title: 'ADAS',
        summary: 'Advanced Driver Assistance Systems development and validation for safer autonomous driving',
        cardImage: '/images/engineering/adas-card.jpg',
        heroImage: '/images/engineering/adas-hero.jpg',
        whatItIs: [
          'ADAS (Advanced Driver Assistance Systems) encompasses cutting-edge technologies that enhance vehicle safety through automated systems like adaptive cruise control, lane keeping assist, automatic emergency braking, and blind spot detection.',
          'Our expertise spans the complete ADAS development lifecycle, from sensor fusion and perception algorithms to decision-making systems and vehicle control integration.',
          'We work with camera, radar, lidar, and ultrasonic sensor technologies to create robust multi-modal perception systems.'
        ],
        whatWeDo: [
          'Design and develop ADAS features from concept through production',
          'Sensor fusion algorithm development and optimization',
          'Perception and object detection system implementation',
          'Path planning and decision-making logic development',
          'ISO 26262 functional safety analysis and implementation',
          'ADAS ECU software development and integration',
          'Validation and testing across diverse driving scenarios',
          'Calibration and tuning for optimal performance'
        ],
        tools: ['MATLAB/Simulink', 'CANoe', 'ETAS INCA', 'Vector Tools', 'Python', 'C/C++', 'ROS', 'CARLA', 'PreScan', 'IPG CarMaker', 'dSPACE'],
        roles: [
          'ADAS Software Engineers',
          'Sensor Fusion Engineers',
          'Perception Algorithm Developers',
          'ADAS Test Engineers',
          'Functional Safety Engineers',
          'Computer Vision Engineers',
          'Control Systems Engineers'
        ]
      },
      {
        slug: 'infotainment',
        title: 'Infotainment',
        summary: 'Connected vehicle infotainment systems with seamless user experiences',
        cardImage: '/images/engineering/infotainment-card.jpg',
        heroImage: '/images/engineering/infotainment-hero.jpg',
        whatItIs: [
          'Modern infotainment systems integrate entertainment, navigation, connectivity, and vehicle controls into unified digital cockpit experiences.',
          'We develop Android Automotive, Linux-based, and embedded infotainment platforms that deliver intuitive interfaces and seamless smartphone integration.',
          'Our solutions support multi-display configurations, voice control, gesture recognition, and cloud connectivity.'
        ],
        whatWeDo: [
          'Infotainment system architecture and design',
          'Android Automotive OS development',
          'Linux-based IVI platform development',
          'HMI/UI design and implementation',
          'Apple CarPlay and Android Auto integration',
          'Voice recognition and natural language processing',
          'Navigation system development and integration',
          'OTA update mechanisms and connectivity solutions',
          'Multimedia framework development',
          'Performance optimization and memory management'
        ],
        tools: ['Android Studio', 'Qt/QML', 'Linux', 'GStreamer', 'HTML5/JavaScript', 'REST APIs', 'MQTT', 'CAN/Ethernet', 'Git', 'Jenkins'],
        roles: [
          'Infotainment Software Developers',
          'Android Automotive Engineers',
          'HMI/UI Developers',
          'Connectivity Engineers',
          'Multimedia Engineers',
          'System Architects',
          'QA Engineers'
        ]
      },
      {
        slug: 'hil',
        title: 'Hardware-in-Loop (HIL)',
        summary: 'Real-time HIL simulation and validation for embedded automotive systems',
        cardImage: '/images/engineering/hil-card.jpg',
        heroImage: '/images/engineering/hil-hero.jpg',
        whatItIs: [
          'Hardware-in-Loop testing creates virtual environments where real ECUs interact with simulated vehicle components, enabling comprehensive validation without physical prototypes.',
          'HIL platforms provide real-time simulation of vehicle dynamics, electrical systems, and network communications to test embedded controllers under realistic conditions.',
          'This approach dramatically reduces development time and costs while improving test coverage and product quality.'
        ],
        whatWeDo: [
          'HIL test bench design and setup',
          'Real-time simulation model development',
          'ECU interface and integration',
          'Automated test script development',
          'Fault injection and edge case testing',
          'CAN/LIN/FlexRay network simulation',
          'Power electronics and motor control HIL',
          'Test automation framework development',
          'Requirements-based test generation',
          'Regression testing and continuous integration'
        ],
        tools: ['dSPACE', 'ETAS LABCAR', 'NI VeriStand', 'Vector CANoe', 'MATLAB/Simulink', 'ControlDesk', 'Python', 'TestStand', 'Jenkins'],
        roles: [
          'HIL Test Engineers',
          'Simulation Engineers',
          'Test Automation Engineers',
          'Model-Based Design Engineers',
          'Validation Engineers',
          'Requirements Engineers'
        ]
      },
      {
        slug: 'autosar',
        title: 'AUTOSAR',
        summary: 'Standardized automotive software architecture and implementation',
        cardImage: '/images/engineering/autosar-card.jpg',
        heroImage: '/images/engineering/autosar-hero.jpg',
        whatItIs: [
          'AUTOSAR (AUTomotive Open System ARchitecture) is the industry-standard software architecture for automotive ECUs, enabling modular, scalable, and reusable software development.',
          'Both Classic AUTOSAR and Adaptive AUTOSAR platforms are used across powertrain, chassis, body, and ADAS domains to standardize software interfaces and improve portability.',
          'Our AUTOSAR expertise ensures compliance with OEM requirements while optimizing performance and maintainability.'
        ],
        whatWeDo: [
          'AUTOSAR Classic and Adaptive platform development',
          'Basic Software (BSW) configuration and integration',
          'Application software component development',
          'RTE (Runtime Environment) generation and optimization',
          'Communication stack (CAN, LIN, FlexRay, Ethernet) configuration',
          'Diagnostic services (UDS) implementation',
          'Memory and I/O abstraction layer development',
          'Software integration and testing',
          'AUTOSAR tool chain setup and automation',
          'Migration from legacy to AUTOSAR architectures'
        ],
        tools: ['Vector DaVinci', 'EB tresos', 'ETAS ISOLAR', 'SystemDesk', 'Rhapsody', 'Enterprise Architect', 'CANoe', 'INCA'],
        roles: [
          'AUTOSAR Architects',
          'BSW Engineers',
          'Application Software Developers',
          'Integration Engineers',
          'Configuration Specialists',
          'Tool Chain Developers'
        ]
      },
      {
        slug: 'functional-safety',
        title: 'Functional Safety',
        summary: 'ISO 26262 compliant safety-critical system development',
        cardImage: '/images/engineering/safety-card.jpg',
        heroImage: '/images/engineering/safety-hero.jpg',
        whatItIs: [
          'Functional safety ensures that automotive systems operate safely even in the presence of faults, following the ISO 26262 standard for automotive safety lifecycle.',
          'Our functional safety expertise covers hazard analysis, safety concept development, ASIL decomposition, and verification activities for safety-critical systems.',
          'We ensure compliance from concept phase through production, with comprehensive safety documentation and assessment.'
        ],
        whatWeDo: [
          'ISO 26262 process implementation and consulting',
          'Hazard Analysis and Risk Assessment (HARA)',
          'Functional Safety Concept (FSC) development',
          'Technical Safety Concept (TSC) creation',
          'ASIL decomposition and safety architecture design',
          'Safety mechanism design and implementation',
          'FMEA, FTA, and FMEDA analysis',
          'Safety validation and verification',
          'Safety case documentation',
          'Functional safety assessments and audits'
        ],
        tools: ['Medini Analyze', 'APIS IQ-Software', 'PTC Windchill', 'IBM DOORS', 'Jama Connect', 'Polarion', 'CANoe', 'dSPACE'],
        roles: [
          'Functional Safety Managers',
          'Safety Engineers',
          'Safety Architects',
          'Safety Analysts',
          'Verification Engineers',
          'Safety Assessors',
          'Requirements Engineers'
        ]
      },
      {
        slug: 'embedded-technologies',
        title: 'Embedded Technologies',
        summary: 'Low-level embedded software and firmware development',
        cardImage: '/images/engineering/embedded-card.jpg',
        heroImage: '/images/engineering/embedded-hero.jpg',
        whatItIs: [
          'Embedded systems form the backbone of modern vehicles, controlling everything from engine management to body electronics and infotainment.',
          'Our embedded engineering covers microcontroller programming, RTOS development, device drivers, bootloaders, and low-level hardware interfaces.',
          'We work with diverse microcontroller families including ARM Cortex, Infineon TriCore, Renesas, and NXP processors.'
        ],
        whatWeDo: [
          'Bare-metal and RTOS-based firmware development',
          'Device driver development (GPIO, UART, SPI, I2C, CAN)',
          'Bootloader and flash programming development',
          'Power management and low-power optimization',
          'Memory management and optimization',
          'Interrupt handling and timing-critical code',
          'Peripheral integration and board bring-up',
          'Real-time operating system porting and configuration',
          'Embedded Linux development',
          'Cross-platform embedded frameworks'
        ],
        tools: ['Keil MDK', 'IAR Embedded Workbench', 'GCC/GDB', 'JTAG Debuggers', 'Oscilloscopes', 'Logic Analyzers', 'FreeRTOS', 'ThreadX', 'QNX', 'Yocto'],
        roles: [
          'Embedded Software Engineers',
          'Firmware Developers',
          'Device Driver Engineers',
          'BSP Developers',
          'Real-Time Systems Engineers',
          'Hardware Integration Engineers'
        ]
      },
      {
        slug: 'testing-validation',
        title: 'Testing & Validation',
        summary: 'Comprehensive verification and validation for automotive systems',
        cardImage: '/images/engineering/testing-card.jpg',
        heroImage: '/images/engineering/testing-hero.jpg',
        whatItIs: [
          'Rigorous testing and validation ensure automotive systems meet safety, reliability, and performance requirements before production.',
          'Our V&V processes cover unit testing, integration testing, system testing, and vehicle-level validation across MIL, SIL, HIL, and on-road environments.',
          'We employ automated testing frameworks and continuous integration to maximize coverage and efficiency.'
        ],
        whatWeDo: [
          'Test strategy and planning',
          'Requirements-based test case development',
          'Model-in-Loop (MIL) testing',
          'Software-in-Loop (SIL) testing',
          'Hardware-in-Loop (HIL) testing',
          'Vehicle-in-Loop (VIL) testing',
          'Automated test framework development',
          'Performance and stress testing',
          'Environmental and EMC testing coordination',
          'Test automation and CI/CD integration',
          'Defect tracking and reporting',
          'Certification and compliance testing'
        ],
        tools: ['CANoe', 'dSPACE', 'ETAS', 'Jenkins', 'Git', 'JIRA', 'TestRail', 'Selenium', 'Robot Framework', 'Python', 'MATLAB'],
        roles: [
          'Test Engineers',
          'Validation Engineers',
          'Automation Engineers',
          'Performance Test Engineers',
          'Quality Assurance Engineers',
          'Certification Engineers'
        ]
      }
    ]
  },
  {
    categorySlug: 'information-technology',
    categoryName: 'Information Technology',
    accentColor: '#10b981',
    description: 'Enterprise software development and digital transformation solutions',
    subservices: [
      {
        slug: 'java',
        title: 'Java',
        summary: 'Robust Java enterprise solutions and Spring ecosystem expertise',
        cardImage: '/images/it/java-card.jpg',
        heroImage: '/images/it/java-hero.jpg',
        whatItIs: [
          'Java remains the foundation of enterprise software, powering mission-critical applications with proven reliability, scalability, and cross-platform compatibility.',
          'Our Java capabilities cover Spring Boot microservices, Jakarta EE applications, reactive programming, and integration with modern cloud platforms.',
          'We build high-performance, maintainable Java solutions that leverage the latest JDK features and best practices.'
        ],
        whatWeDo: [
          'Spring Boot application development',
          'Microservices architecture with Spring Cloud',
          'RESTful API development with Spring MVC',
          'Reactive programming with Spring WebFlux',
          'JPA/Hibernate data persistence',
          'Kafka and message-driven architectures',
          'Jakarta EE (J2EE) application development',
          'Application modernization and refactoring',
          'Security implementation with Spring Security',
          'Integration testing and CI/CD pipelines'
        ],
        tools: ['IntelliJ IDEA', 'Eclipse', 'Maven', 'Gradle', 'Spring Framework', 'Hibernate', 'Kafka', 'PostgreSQL', 'MongoDB', 'Jenkins'],
        roles: [
          'Java Developers',
          'Spring Boot Engineers',
          'Backend Architects',
          'Microservices Developers',
          'Integration Specialists',
          'Full Stack Java Engineers'
        ]
      },
      {
        slug: 'dotnet',
        title: '.NET',
        summary: 'Enterprise .NET application development and modernization',
        cardImage: '/images/it/dotnet-card.jpg',
        heroImage: '/images/it/dotnet-hero.jpg',
        whatItIs: [
          'The .NET ecosystem provides a comprehensive platform for building enterprise applications, web services, and cloud-native solutions with C# and related technologies.',
          'Our .NET expertise spans ASP.NET Core, Blazor, Entity Framework, microservices architectures, and Azure integration for scalable, maintainable solutions.',
          'We deliver modern .NET applications that leverage the latest framework capabilities while ensuring security, performance, and maintainability.'
        ],
        whatWeDo: [
          'ASP.NET Core web application development',
          'Blazor WebAssembly and Server applications',
          '.NET microservices architecture and implementation',
          'RESTful and GraphQL API development',
          'Entity Framework Core data access',
          'Azure cloud integration and deployment',
          'Legacy .NET Framework migration to .NET Core',
          'Authentication and authorization (Identity, OAuth, JWT)',
          'Real-time applications with SignalR',
          'Performance optimization and caching strategies'
        ],
        tools: ['Visual Studio', 'VS Code', 'Azure DevOps', 'Git', 'Docker', 'Kubernetes', 'SQL Server', 'Azure', 'Redis', 'RabbitMQ'],
        roles: [
          '.NET Developers',
          'Full Stack Developers',
          'Backend Engineers',
          'Cloud Architects',
          'DevOps Engineers',
          'API Developers'
        ]
      },
      {
        slug: 'mobile-hybrid',
        title: 'Mobile & Hybrid Technologies',
        summary: 'Cross-platform mobile applications for iOS and Android',
        cardImage: '/images/it/mobile-card.jpg',
        heroImage: '/images/it/mobile-hero.jpg',
        whatItIs: [
          'Modern mobile development requires expertise in native iOS and Android platforms as well as cross-platform frameworks that maximize code reuse and accelerate delivery.',
          'Our mobile team delivers feature-rich applications using React Native, Flutter, and native technologies, with seamless backend integration and offline capabilities.',
          'We create intuitive, performant mobile experiences that meet platform-specific design guidelines while sharing business logic across platforms.'
        ],
        whatWeDo: [
          'React Native cross-platform development',
          'Flutter application development',
          'Native iOS development (Swift/SwiftUI)',
          'Native Android development (Kotlin/Jetpack Compose)',
          'Mobile API integration and state management',
          'Offline-first architecture and sync mechanisms',
          'Push notifications and deep linking',
          'Mobile DevOps and CI/CD pipelines',
          'App Store and Google Play deployment',
          'Mobile analytics and crash reporting integration'
        ],
        tools: ['React Native', 'Flutter', 'Xcode', 'Android Studio', 'Firebase', 'Fastlane', 'Redux', 'GraphQL', 'Jest', 'Detox'],
        roles: [
          'Mobile Developers',
          'React Native Engineers',
          'Flutter Developers',
          'iOS Engineers',
          'Android Engineers',
          'Mobile Architects'
        ]
      },
      {
        slug: 'cloud-devops',
        title: 'Cloud & DevOps',
        summary: 'Cloud infrastructure, automation, and DevOps transformation',
        cardImage: '/images/it/cloud-card.jpg',
        heroImage: '/images/it/cloud-hero.jpg',
        whatItIs: [
          'Cloud and DevOps practices enable organizations to deploy faster, scale efficiently, and maintain reliable systems through automation and infrastructure as code.',
          'Our cloud expertise spans AWS, Azure, and Google Cloud, with deep knowledge of containerization, orchestration, and serverless architectures.',
          'We implement comprehensive CI/CD pipelines, monitoring solutions, and security practices that support agile development and continuous delivery.'
        ],
        whatWeDo: [
          'Cloud architecture design and migration (AWS, Azure, GCP)',
          'Infrastructure as Code (Terraform, CloudFormation)',
          'Container orchestration with Kubernetes',
          'Docker containerization strategies',
          'CI/CD pipeline development (Jenkins, GitLab CI, GitHub Actions)',
          'Serverless architecture implementation',
          'Monitoring and observability (Prometheus, Grafana, ELK)',
          'Cloud security and compliance',
          'Cost optimization and resource management',
          'High availability and disaster recovery planning'
        ],
        tools: ['Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'GitLab', 'AWS', 'Azure', 'Ansible', 'Prometheus', 'Grafana'],
        roles: [
          'DevOps Engineers',
          'Cloud Architects',
          'Site Reliability Engineers',
          'Platform Engineers',
          'Infrastructure Engineers',
          'Security Engineers'
        ]
      },
      {
        slug: 'data-engineering',
        title: 'Data Engineering',
        summary: 'Scalable data pipelines and analytics infrastructure',
        cardImage: '/images/it/data-card.jpg',
        heroImage: '/images/it/data-hero.jpg',
        whatItIs: [
          'Data engineering builds the foundation for data-driven organizations by creating robust pipelines that collect, transform, and deliver data at scale.',
          'Our data platform solutions leverage modern tools like Spark, Kafka, and cloud data warehouses to enable real-time analytics and machine learning applications.',
          'We design data architectures that are scalable, maintainable, and optimized for both batch and streaming workloads.'
        ],
        whatWeDo: [
          'Data pipeline development (ETL/ELT)',
          'Real-time streaming with Kafka and Spark Streaming',
          'Data warehouse design and implementation',
          'Data lake architecture (S3, ADLS, GCS)',
          'Apache Spark for big data processing',
          'Cloud data platform implementation (Snowflake, Databricks, Redshift)',
          'Data quality and validation frameworks',
          'API development for data access',
          'DataOps and pipeline automation',
          'Data governance and lineage tracking'
        ],
        tools: ['Apache Spark', 'Kafka', 'Airflow', 'Snowflake', 'Databricks', 'Python', 'SQL', 'dbt', 'AWS Glue', 'Azure Data Factory'],
        roles: [
          'Data Engineers',
          'Data Platform Engineers',
          'ETL Developers',
          'Big Data Engineers',
          'Data Architects',
          'Analytics Engineers'
        ]
      },
      {
        slug: 'qa-automation',
        title: 'QA Automation',
        summary: 'Comprehensive test automation and quality assurance',
        cardImage: '/images/it/qa-card.jpg',
        heroImage: '/images/it/qa-hero.jpg',
        whatItIs: [
          'Modern QA automation accelerates delivery while ensuring software quality through comprehensive test coverage across unit, integration, and end-to-end scenarios.',
          'Our QA practice implements shift-left testing, continuous testing in CI/CD pipelines, and intelligent test automation that maximizes ROI.',
          'We deliver test strategies that balance speed and quality, with automated regression suites and performance testing integrated into the development lifecycle.'
        ],
        whatWeDo: [
          'Test automation framework design and development',
          'Web UI automation (Selenium, Playwright, Cypress)',
          'API testing and automation (Postman, REST Assured)',
          'Mobile test automation (Appium, Detox)',
          'Performance testing (JMeter, Gatling, k6)',
          'Test data management and generation',
          'CI/CD integration and continuous testing',
          'Visual regression testing',
          'Accessibility testing automation',
          'Test reporting and metrics dashboards'
        ],
        tools: ['Selenium', 'Cypress', 'Playwright', 'JMeter', 'Postman', 'TestNG', 'Jest', 'Appium', 'Jenkins', 'Allure'],
        roles: [
          'QA Automation Engineers',
          'SDET (Software Development Engineers in Test)',
          'Performance Test Engineers',
          'Test Architects',
          'Quality Engineers',
          'Manual Testers'
        ]
      }
    ]
  },
  {
    categorySlug: 'healthcare',
    categoryName: 'Healthcare',
    accentColor: '#06b6d4',
    description: 'Healthcare IT solutions and clinical data analytics',
    subservices: [
      {
        slug: 'healthcare-it',
        title: 'Healthcare IT',
        summary: 'Electronic health records and healthcare application development',
        cardImage: '/images/healthcare/healthit-card.jpg',
        heroImage: '/images/healthcare/healthit-hero.jpg',
        whatItIs: [
          'Healthcare IT encompasses the systems that enable modern healthcare delivery, from electronic health records to patient portals and clinical decision support tools.',
          'Our healthcare IT solutions focus on interoperability, user experience, and regulatory compliance to improve patient outcomes and operational efficiency.',
          'We understand HIPAA, HL7, FHIR, and other healthcare standards essential for secure, integrated healthcare systems.'
        ],
        whatWeDo: [
          'EHR/EMR system integration and customization',
          'Patient portal development',
          'HL7 and FHIR interface development',
          'Clinical workflow automation',
          'Telehealth platform development',
          'Medical device integration',
          'Healthcare mobile applications',
          'Interoperability solutions',
          'Clinical decision support systems',
          'Healthcare API development'
        ],
        tools: ['FHIR', 'HL7', 'Epic Interconnect', 'Cerner APIs', 'Python', '.NET', 'Java', 'SQL Server', 'MongoDB', 'Azure Health'],
        roles: [
          'Healthcare Software Developers',
          'Integration Engineers',
          'FHIR Specialists',
          'Clinical Informatics Analysts',
          'Healthcare Architects',
          'Mobile Health Developers'
        ]
      },
      {
        slug: 'claims-billing',
        title: 'Claims & Billing Data',
        summary: 'Healthcare claims processing and revenue cycle management',
        cardImage: '/images/healthcare/claims-card.jpg',
        heroImage: '/images/healthcare/claims-hero.jpg',
        whatItIs: [
          'Claims and billing systems form the financial backbone of healthcare organizations, processing billions of transactions while ensuring accuracy and compliance.',
          'Our expertise covers the complete revenue cycle from patient registration through claims submission, adjudication, denial management, and payment reconciliation.',
          'We work with EDI transactions (837, 835, 834), medical coding systems (ICD-10, CPT, HCPCS), and payer-specific formats to optimize reimbursement.'
        ],
        whatWeDo: [
          'Claims management system development',
          'EDI transaction processing (X12)',
          'Revenue cycle optimization solutions',
          'Claims scrubbing and validation',
          'Denial management and appeal automation',
          'Payment posting and reconciliation',
          'Prior authorization workflow systems',
          'Medical coding assistance tools',
          'Clearinghouse integration',
          'Claims analytics and reporting'
        ],
        tools: ['X12 EDI', 'SQL', 'Python', 'Java', '.NET', 'Oracle', 'Tableau', 'Power BI', 'Guidewire', 'Change Healthcare APIs'],
        roles: [
          'Claims System Developers',
          'EDI Specialists',
          'Revenue Cycle Analysts',
          'Healthcare Data Engineers',
          'Integration Engineers',
          'Business Analysts'
        ]
      },
      {
        slug: 'clinical-analytics',
        title: 'Clinical Analytics',
        summary: 'Advanced analytics for clinical outcomes and population health',
        cardImage: '/images/healthcare/analytics-card.jpg',
        heroImage: '/images/healthcare/analytics-hero.jpg',
        whatItIs: [
          'Clinical analytics transforms healthcare data into actionable insights that improve patient care, identify at-risk populations, and measure clinical effectiveness.',
          'Our solutions combine clinical data, claims data, and social determinants of health to enable predictive modeling, risk stratification, and quality measurement.',
          'We build analytics platforms that support value-based care initiatives, population health management, and evidence-based medicine.'
        ],
        whatWeDo: [
          'Clinical data warehouse development',
          'Predictive modeling for patient outcomes',
          'Risk stratification algorithms',
          'Quality measure reporting (HEDIS, CMS)',
          'Population health analytics',
          'Care gap identification and closure',
          'Real-time clinical dashboards',
          'Natural language processing of clinical notes',
          'Social determinants of health integration',
          'Machine learning for clinical insights'
        ],
        tools: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'SAS', 'TensorFlow', 'Spark', 'Snowflake', 'Databricks'],
        roles: [
          'Healthcare Data Scientists',
          'Clinical Analysts',
          'Population Health Analysts',
          'Healthcare BI Developers',
          'Data Engineers',
          'Research Analysts'
        ]
      },
      {
        slug: 'compliance-security',
        title: 'Compliance & Security',
        summary: 'HIPAA compliance and healthcare cybersecurity solutions',
        cardImage: '/images/healthcare/security-card.jpg',
        heroImage: '/images/healthcare/security-hero.jpg',
        whatItIs: [
          'Healthcare organizations face unique compliance and security challenges, protecting sensitive patient information while enabling necessary data access for care delivery.',
          'Our compliance and security practice ensures HIPAA adherence, implements defense-in-depth security architectures, and maintains audit trails for regulatory requirements.',
          'We address privacy, security, breach notification, and business associate requirements across all healthcare systems and workflows.'
        ],
        whatWeDo: [
          'HIPAA compliance assessment and implementation',
          'Security risk analysis and management',
          'Access control and identity management',
          'Encryption implementation (data at rest and in transit)',
          'Audit logging and monitoring',
          'Breach detection and response',
          'Business associate agreement management',
          'Security awareness training programs',
          'Vulnerability assessment and penetration testing',
          'Compliance reporting and documentation'
        ],
        tools: ['Splunk', 'Azure Security', 'AWS Security Hub', 'Okta', 'Active Directory', 'Nessus', 'Qualys', 'CrowdStrike', 'Palo Alto Networks'],
        roles: [
          'Healthcare Security Engineers',
          'Compliance Analysts',
          'HIPAA Privacy Officers',
          'Security Architects',
          'Risk Analysts',
          'Identity Management Specialists'
        ]
      },
      {
        slug: 'reporting-bi',
        title: 'Reporting & BI',
        summary: 'Healthcare business intelligence and executive reporting',
        cardImage: '/images/healthcare/reporting-card.jpg',
        heroImage: '/images/healthcare/reporting-hero.jpg',
        whatItIs: [
          'Healthcare business intelligence provides executives and operational leaders with the insights needed to make data-driven decisions about clinical operations, financial performance, and strategic initiatives.',
          'Our BI solutions integrate clinical, financial, and operational data sources to deliver comprehensive dashboards, KPI tracking, and ad-hoc reporting capabilities.',
          'We design intuitive visualizations that make complex healthcare data accessible to non-technical stakeholders while maintaining data governance.'
        ],
        whatWeDo: [
          'Executive dashboard development',
          'Operational reporting systems',
          'Financial performance analytics',
          'Clinical quality scorecards',
          'Self-service BI implementations',
          'Data visualization and storytelling',
          'Report automation and distribution',
          'KPI tracking and alerting',
          'Mobile BI applications',
          'Embedded analytics integration'
        ],
        tools: ['Tableau', 'Power BI', 'Qlik Sense', 'SQL', 'Python', 'DAX', 'MDX', 'Excel', 'SSRS', 'Snowflake'],
        roles: [
          'BI Developers',
          'Data Visualization Specialists',
          'Healthcare Business Analysts',
          'Report Developers',
          'Analytics Consultants',
          'Data Modelers'
        ]
      }
    ]
  }
];

export const getServiceCategory = (categorySlug: string): ServiceCategory | undefined => {
  return serviceCategories.find(cat => cat.categorySlug === categorySlug);
};

export const getSubService = (categorySlug: string, subSlug: string): SubService | undefined => {
  const category = getServiceCategory(categorySlug);
  return category?.subservices.find(sub => sub.slug === subSlug);
};

