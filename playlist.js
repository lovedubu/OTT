// ==========================================
// playlist.js — 재생목록 데이터 + 렌더링 로직
// 새 재생목록을 추가하려면 playlists 객체에 새 항목만 추가하면 됩니다.
//
// 페이지에서 ?id=list2 처럼 파라미터를 주면 해당 재생목록의
// 에피소드 목록(ep-list)이 렌더링됩니다.
// show-title / show-desc / show-year / show-count / playlist-tabs 요소는
// 있으면 채워주고, 없으면 그냥 건너뜁니다 (에러 안 남).
// ==========================================

const playlists = {
    list1: {
    title: '리액트 기초 강의',
    desc: '리액트 한번에 이해시켜줄 명쾌한 강의',
    year: '2024',
    count: '10개 영상',
    episodes: [
      {
        num: 1,
        title: '이거 모르면 프론트엔드 개발자 못됨 | 리액트 진짜 쉽게 설명해줌 | 리액트 초보자 입문 강의 1탄',
        duration: '09분 45초',
        synopsis: '프론트 엔드 개발자가 되기위해 반드시 알아야하는 리액트에 대해 강의',
        url: 'https://www.youtube.com/watch?v=MeZ3FCTub3I&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=2',
        thumb: 'https://i.ytimg.com/vi/MeZ3FCTub3I/hqdefault.jpg',
        progress: 0
      },
      {
        num: 2,
        title: '프론트엔드 화룡점정ㄹㅇ개 핵심강의 | 리액트 이거보도고 이해못하면 집가라...',
        duration: '13분 25초',
        synopsis: '리액트 시작전 우리가 반드시 알아야하는 자바스크립트 문법',
        url: 'https://www.youtube.com/watch?v=qcphnSqneE0&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=1',
        thumb: 'https://i.ytimg.com/vi/qcphnSqneE0/hqdefault.jpg',
        progress: 0
      },
      {
        num: 3,
        title: '리액트 시작전 모르면 낭패보는 자바스크립트 문법 싹! 정리! 이거 먼저 보고 리액트 공부 시작하자 | 자바스크립트 문법 어디까지 아니?',
        duration: '16분 04초',
        synopsis: '리액트 시작전 우리가 반드시 알아야하는 자바스크립트 문법',
        url: 'https://www.youtube.com/watch?v=NcI-WJSWdv8&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=3',
        thumb: 'https://i.ytimg.com/vi/NcI-WJSWdv8/hqdefault.jpg',
        progress: 0
      },
      {
        num: 4,
        title: '리액트 초보자 입문강의 3탄 | 리액트 state 진짜 쉽게 설명해줌 | 이거 모르면 프론트엔드 개발자는 힘들지...',
        duration: '20분 47초',
        synopsis: '리액트의 가장 핵심컨셉인 리액트 state에 대해서 기똥차게 설명해보려고 해봤습니다!',
        url: 'https://www.youtube.com/watch?v=TFLvKGhrAwM&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=4',
        thumb: 'https://i.ytimg.com/vi/TFLvKGhrAwM/hqdefault.jpg',
        progress: 0
      },
     {
        num: 5,
        title: '리액트로 할일앱을 만들어보자!(웃김주의) | 실제 리액트 개념이 어떻게 사용되는지 살펴보자| 리액트 초보자용',
        duration: '19분 19초',
        synopsis: '기본 컨셉: 컴포넌트,props,state를 가지고 프로젝트 실습!',
        url: 'https://www.youtube.com/watch?v=TjUju3aUIDM&list=PLKvVQ9ZQzjVlhns6485UURxLgkwm-kzvY&index=1v',
        thumb: 'https://i.ytimg.com/vi/TjUju3aUIDM/hqdefault.jpg',
        progress: 100
      },
      {
        num: 6,
        title: '아직도 옛날 리덕스 쓴다고..? 옛날 리덕스를 최신 리덕스 Toolkit으로 바꿔보자!',
        duration: '18분 42초',
        synopsis: '많은 분들이 예전 리덕스 문법을 그대로 사용하시는데 이번 기회에 우리 좀더 편한 redux toolkit으로 갈아타 볼까요?',
        url: 'https://www.youtube.com/watch?v=UKnLwVm9suY&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=6',
        thumb: 'https://i.ytimg.com/vi/UKnLwVm9suY/hqdefault.jpg',
        progress: 0
      },
      {
        num: 7,
        title: '리액트 프로젝트를 더 풍부하게 만들어줄 애니메이션 라이브러리 React Spring',
        duration: '21분 1초',
        synopsis: '오늘은 내 웹사이트를 더 풍부하게 만들어줄 애니메이션 라이브러리인 react spring을 가져왔습니다! ',
        url: 'https://www.youtube.com/watch?v=jOSu8VzJbpQ&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=7',
        thumb: 'https://i.ytimg.com/vi/jOSu8VzJbpQ/hqdefault.jpg',
        progress: 0
      },

      {
        num: 8,
        title: '리액트 가장 쉽게 알려줄께! 부트캠프출신 강사의 리액트 강의 출시 | 코딩 독학러들 모여라!',
        duration: '06분 37초',
        synopsis: '왜 리액트를 배워야 하는가?',
        url: 'https://www.youtube.com/watch?v=Tc0uZVVwP1c&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=8',
        thumb: 'https://i.ytimg.com/vi/Tc0uZVVwP1c/hqdefault.jpg',
        progress: 0
      },

      {
        num: 9,
        title: '이건 어떻게 쓰냐 보다 왜 쓰냐 가 중요하다 | useMemo 의 두 가지 용도',
        duration: '21분 07초',
        synopsis: 'useMemo는 언제 쓰이는가',
        url: 'https://www.youtube.com/watch?v=XeC8vRBpZTw&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=10',
        thumb: 'https://i.ytimg.com/vi/XeC8vRBpZTw/hqdefault.jpg',
        progress: 0
      },
      {
        num: 10,
        title: 'useRef 훅 누구보다 쉽게 설명해드림 | 지금 까지 useState만 썼다면 꼭 봐라',
        duration: '20분 50초',
        synopsis: 'useState,useEffect만 써봤다고..? 오늘은 useRef 도 알아보자!',
        url: 'https://www.youtube.com/watch?v=kllWOdnU1Fg&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=9',
        thumb: 'https://i.ytimg.com/vi/kllWOdnU1Fg/hqdefault.jpg',
        progress: 0
      },
      {
        num: 11,
        title: '컴포넌트 커터마이즈 하기 힘들었던 사람 다 들어와',
        duration: '32분 52초',
        synopsis: '스타일 컴포넌트, 테마 , css module 까지 싹 다 정리해줄게',
        url: 'https://www.youtube.com/watch?v=KJo_EQtG8Rw&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=11',
        thumb: 'https://i.ytimg.com/vi/KJo_EQtG8Rw/hqdefault.jpg',
        progress: 0
      },
      {
        num: 12,
        title: '리액트 19에서 새로나온 훅들 싹다 정리해드림',
        duration: '22분 47초',
        synopsis: ' useActionState, useOptimistic, useTransition, useFormStauts, use',
        url: 'https://www.youtube.com/watch?v=gdQzGkW5kps&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=12',
        thumb: 'https://i.ytimg.com/vi/gdQzGkW5kps/hqdefault.jpg',
        progress: 0
      }                    
    ]
  },

    list2: {
    title: '누나의 조언',
    desc: '같은 국비지원을 다녀도 남들과 차별화된 이것',
    year: '2024',
    count: '8개 영상',
    episodes: [
      {
        num: 1,
        title: '학점이 바닥이신 분들은 보세요 | 학점이 낮으면 해야하는 것들 | 수석졸업하면 취업에 얼마나 도움이 될까?',
        duration: '10분 07초',
        synopsis: '인생에 수석을 한번 해본 누나로써 학점이 낮으면 해야하는 것들과 제가 어떻게 공부를 했는지 그리고 학점이 왜 의미가 없는지 알려드릴려고 합니다',
        url: 'https://www.youtube.com/watch?v=7GDK-oJE1E0&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=1&t=1s',
        thumb: 'https://i.ytimg.com/vi/7GDK-oJE1E0/hqdefault.jpg',
        progress: 0
      },
      {
        num: 2,
        title: '시니어 개발자들은 보지마세요. 신입 or 주니어 개발자 면접 꿀팁 1탄 - 코딩테스트, 코딩 면접 잘보는 법',
        duration: '08분 32초',
        synopsis: '개발자 면접을 보면서 가지고있었던 개인적인 노하우 방출!',
        url: 'https://www.youtube.com/watch?v=HFEurBNmMwM&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=2',
        thumb: 'https://i.ytimg.com/vi/HFEurBNmMwM/hqdefault.jpg',
        progress: 100
      },
      {
        num: 3,
        title: '기술면접 모르는 질문 받았을때 대처법 | 시니어 개발자 분들은 보지 마세요 | 신입개발자, 주니어 개발자 면접 꿀팁',
        duration: '07분 51초',
        synopsis: '기술 면접 대처법, 신입개발자, 주니어개발자 면접 꿀팁 방출 2탄!',
        url: 'https://www.youtube.com/watch?v=4XNJFAPnZrY&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=1&t=4s',
        thumb: 'https://i.ytimg.com/vi/4XNJFAPnZrY/hqdefault.jpg',
        progress: 100
      },
      {
        num: 4,
        title: '문과생이 인공지능 자격증딴 후기 (ft 겁나쉬운 인공지능 강의)',
        duration: '09분 16초',
        synopsis: '인공지능 독학방법. 문과생도 이해하는 머신러닝 강의',
        url: 'https://www.youtube.com/watch?v=vuQzYRaf9T0&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=4',
        thumb: 'https://i.ytimg.com/vi/vuQzYRaf9T0/hqdefault.jpg',
        progress: 0
      },
   
      {
        num: 5,
        title: '누구도 안알려주는 문과 대기업 프리패스 방법 | 문과전공 버리지 마세요. 문과가 "진짜" 입니다.',
        duration: '07분 15초',
        synopsis: '여러분들이 힘들게 배운 전공 버리지 마세요 문과가 사실 "진짜" 입니다',
        url: 'https://www.youtube.com/watch?v=0TF2ZFpSpxo&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=3',
        thumb: 'https://i.ytimg.com/vi/0TF2ZFpSpxo/hqdefault.jpg',
        progress: 0
      },


        {
        num: 6,
        title: '이런분들은 코딩 배워도 실패합니다',
        duration: '09분 12초',
        synopsis: '부트캠프 강사가 말하는 개발자 될놈과 안될놈',
        url: 'https://www.youtube.com/watch?v=tMIl7fcVXJY&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=7',
        thumb: 'https://i.ytimg.com/vi/tMIl7fcVXJY/hqdefault.jpg',
        progress: 0
      },

         {
        num: 7,
        title: '코딩공부 작심삼일 실패하는 이유 (파이썬,C언어 먼저하면 망함)',
        duration: '02분 22초',
        synopsis: '부트캠프 강사가 알려주는 코딩 공부법, 코딩 독학하는 이들을 위한 영상',
        url: 'https://www.youtube.com/watch?v=_8mjcJAp0Sw&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=7',
        thumb: 'https://i.ytimg.com/vi/_8mjcJAp0Sw/hqdefault.jpg',
        progress: 0
      },
     {
        num: 8,
        title: '대학교?부트캠프?독학? 코딩공부 방법 뭐가좋을까?',
        duration: '08분 20초',
        synopsis: '부트캠프 현직 강사가 알려주는 전격비교',
        url: 'https://www.youtube.com/watch?v=2sJX2oBxI2s&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=9',
        thumb: 'https://i.ytimg.com/vi/2sJX2oBxI2s/hqdefault.jpg',
        progress: 0
      },
     {
        num: 9,
        title: '대학교?부트캠프?독학? 코딩공부 방법 뭐가좋을까?',
        duration: '08분 20초',
        synopsis: '부트캠프 현직 강사가 알려주는 전격비교',
        url: 'https://www.youtube.com/watch?v=2sJX2oBxI2s&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=9',
        thumb: 'https://i.ytimg.com/vi/2sJX2oBxI2s/hqdefault.jpg',
        progress: 0
      },
    {
        num: 10,
        title: '남들과 다른길을가는 친구 이야기 (ft. MZ세대가 불안한 이유)',
        duration: '17분 35초',
        synopsis: '라이브커머스 쇼호스트의 삶',
        url: 'https://www.youtube.com/watch?v=8fg0xxglmQk&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=3',
        thumb: 'https://i.ytimg.com/vi/8fg0xxglmQk/hqdefault.jpg',
        progress: 0
      },

    {
        num: 11,
        title: '코딩알려주는 누나 그녀가 궁금하다',
        duration: '12분 09초',
        synopsis: '신입 개발자 나이? 포트폴리오개수? 개발 실력을 쌓는법? 등 개발관련 질문 다 받는다 | 2만기념 Q&A',
        url: 'https://www.youtube.com/watch?v=V3Zssso35Ks&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=2&t=53s',
        thumb: 'https://i.ytimg.com/vi/V3Zssso35Ks/hqdefault.jpg',
        progress: 100
      },
    {
        num: 12,
        title: '개발자 프리랜서의 모든것을 물어봤습니다.',
        duration: '08분 52초',
        synopsis: '컴퓨터 공학과를 나와서 개발자를 5개월만에 때려친 친구이야기',
        url: 'https://www.youtube.com/watch?v=1Wwevxy_ius&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=4',
        thumb: 'https://i.ytimg.com/vi/1Wwevxy_ius/hqdefault.jpg',
        progress: 0
      },
    {
        num: 13,
        title: '실제 겪어보고 깨달은 가장 현실적인 해외취업 방법. | 회사를 고를때 중요한것 | 해외에서 직장을 구하는 방법. | 베트남 취업',
        duration: '11분 24초',
        synopsis: '해외에 취업한 방법에 대해서 공유를 해드릴려고 합니다! 어떻게 직장을 구했는지! 제 경험을 공유해 봤습니다!',
        url: 'https://www.youtube.com/watch?v=pNqG6k8Yl9A&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=5',
        thumb: 'https://i.ytimg.com/vi/pNqG6k8Yl9A/hqdefault.jpg',
        progress: 0
      },

    {
        num: 14,
        title: '면접 잘보는 법 | 면접관 입장에서 말하는 뽑고싶은 지원자와 안뽑고싶은 지원자는? | 매력있게 말하는 법',
        duration: '13분 10초',
        synopsis: '일반 인성면접에서 매력있는 사람으로 보일 수 있는 팁!',
        url: 'https://www.youtube.com/watch?v=mi0N-5-8LEc&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=4',
        thumb: 'https://i.ytimg.com/vi/mi0N-5-8LEc/hqdefault.jpg',
        progress: 100
      },

    {
        num: 15,
        title: '리액트 vs Next JS vs Gatsby 언제 뭘 써야하지? | CSR vs SSR vs SSG 내 프로젝트 분석하고 맞는 기술스택 선택하는법!',
        duration: '14분 39초',
        synopsis: '요즘 핫하다는 리액트 vs Gatsby vs Nextjs 어떤 상황에서 어떤걸 쓰는게 좋을까?',
        url: 'https://www.youtube.com/watch?v=C6kiIkrBdyE&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=14',
        thumb: 'https://i.ytimg.com/vi/C6kiIkrBdyE/hqdefault.jpg',
        progress: 0
      },
    {
        num: 16,
        title: '코딩 강사들의 수입부터 직업 장단점 까지 알아보자',
        duration: '15분 25초',
        synopsis: '오늘은 코딩강사라는 직업에 대해서 얘기를 해보았어요!',
        url: 'https://www.youtube.com/watch?v=lov58qjqlKM&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=15',
        thumb: 'https://i.ytimg.com/vi/lov58qjqlKM/hqdefault.jpg',
        progress: 0
      },
    {
        num: 17,
        title: '어떻게 하면 발표할때 긴장 안하고 잘 할 수 있을까? 대학생들, 직장인, 강사 다 들어와~~',
        duration: '11분 11초',
        synopsis: '오늘은 저만의 발표, 강의 잘하는 팁을 알려드릴려고 합니다! ',
        url: 'https://www.youtube.com/watch?v=ykXrlZBQxx8&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=16',
        thumb: 'https://i.ytimg.com/vi/ykXrlZBQxx8/hqdefault.jpg',
        progress: 0
      },

    {
        num: 18,
        title: '번아웃이 오기 직전이라면 보세요',
        duration: '10분 23초',
        synopsis: '누나의 일상, 잔소리 시작 (누나의 멘탈관리, 스케줄관리법), 애자일 방식이란, 당신의 삶의 질을 바꿔줄 스케줄표',
        url: 'https://www.youtube.com/watch?v=PwKsNjBOM0I&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=17',
        thumb: 'https://i.ytimg.com/vi/PwKsNjBOM0I/hqdefault.jpg',
        progress: 0
      },


    {
        num: 19,
        title: '국비지원에서 아무리 열심히 해도 이런 개발자면 소용없다 | 걸러야하는 회사의 특징',
        duration: '12분 33초',
        synopsis: '도태되는 개발자 또는 나를 성장시키지 않는 회사 특징 5가지',
        url: 'https://www.youtube.com/watch?v=r0Nlm6HAyPU&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=18',
        thumb: 'https://i.ytimg.com/vi/r0Nlm6HAyPU/hqdefault.jpg',
        progress: 0
      },

    {
        num: 20,
        title: '내코드가 과연 잘 짠 코드일까?',
        duration: '21분 06초',
        synopsis: '근거있는 코드리뷰 하는법 : 좋은 코드의 조건 4가지',
        url: 'https://www.youtube.com/watch?v=S6eMI_lDn9o&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=19',
        thumb: 'https://i.ytimg.com/vi/S6eMI_lDn9o/hqdefault.jpg',
        progress: 0
      },  

    {
        num: 21,
        title: '하... 처음부터 다시짜고싶다.. | 확장성 & 재사용성 높은 코드 짜는 법',
        duration: '18분 34초',
        synopsis: '이번시간에는 내 코드가 왜 가면갈수록 더러워지는지 알아봅시다! ',
        url: 'https://www.youtube.com/watch?v=sCK6pxThh5M&list=PLKvVQ9ZQzjVmewq1ubQsyrm3vnK1s2ZAv&index=20',
        thumb: 'https://i.ytimg.com/vi/sCK6pxThh5M/hqdefault.jpg',
        progress: 0
      },

     {
        num: 22,
        title: '정말 이분 한대로만 따라하면 개발자 취업 가능합니다 (대단주의) | 누나강의를 들으면 개발자가 될 수 있을까?',
        duration: '25분 41초',
        synopsis: '정말 이분 한대로만 따라하면 개발자 취업 가능합니다 (대단주의)',
        url: 'https://www.youtube.com/watch?v=cn9bS6OAWxY&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=10',
        thumb: 'https://i.ytimg.com/vi/cn9bS6OAWxY/hqdefault.jpg',
        progress: 0
      }                
    ]
  },

    list3: {
    title: '국비지원과 부트캠프의 모든것국비지원과 부트캠프의 모든것',
    desc: '같은 국비지원을 다녀도 남들과 차별화된 이것',
    year: '2024',
    count: '8개 영상',
    episodes: [
      {
        num: 1,
        title: '부트캠프 강사가본 학생들이 국비지원 또는 부트캠프에서 반드시 해야하는 것 TOP 5',
        duration: '11분 58초',
        synopsis: '강사로서 학생들을 지켜본 결과 나중에 잘되는 학생들이 했던 특징들과 제 개인적인 팁',
        url: 'https://www.youtube.com/watch?v=ZOjHc6Y22hY&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=1',
        thumb: 'https://i.ytimg.com/vi/ZOjHc6Y22hY/hqdefault.jpg',
        progress: 0
      },
      {
        num: 2,
        title: '개발자가...과연나랑 맞을까..? 스탠포드가 만든 코딩게임으로 한번 테스트해보자',
        duration: '09분 34초',
        synopsis: '코딩의 개념을 게임으로 쉽게 설명해주고 또 알고리즘이라는것까지 짜볼 수 있는 으마으마하게 재미있는 Karel이라는 게임으로 찾아왔습니다',
        url: 'https://www.youtube.com/watch?v=RlyGaqW2l58&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=2',
        thumb: 'https://i.ytimg.com/vi/RlyGaqW2l58/hqdefault.jpg',
        progress: 0
      },
      {
        num: 3,
        title: '부트캠프 강사가 말하는 코딩 입문자가 맨날 밤을 새는 이유들 (이것만 고치면 속도가 증가함)',
        duration: '06분 03초',
        synopsis: '오늘은 부트캠프 학생들이 가장많이 시간을 뺏기는 부분에대해서 소개를 해봤어요!',
        url: 'https://www.youtube.com/watch?v=NeCJCsWVvcI&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=3',
        thumb: 'https://i.ytimg.com/vi/NeCJCsWVvcI/hqdefault.jpg',
        progress: 0
      },
      {
        num: 4,
        title: '좋은 개발자 포트폴리오 나쁜 포트폴리오 전격 비교',
        duration: '15분 21초',
        synopsis: '100명이 넘는 학생을 취업시켰습니다.',
        url: 'https://www.youtube.com/watch?v=5UIZ_WYwCfI&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=4',
        thumb: 'https://i.ytimg.com/vi/5UIZ_WYwCfI/hqdefault.jpg',
        progress: 0
      },
   
      {
        num: 5,
        title: '국비지원의 모든것을 물어봤습니다. ',
        duration: '14분 03초',
        synopsis: '부트캠프와 국비지원 전격비교 1탄',
        url: 'https://www.youtube.com/watch?v=4cZA1EPSzSw&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=6',
        thumb: 'https://i.ytimg.com/vi/4cZA1EPSzSw/hqdefault.jpg',
        progress: 0
      },

        {
        num: 6,
        title: '국비지원 경력만으로 ㅈㄴ 좋은회사간 친구를 만났습니다',
        duration: '12분 51초',
        synopsis: '신입 개발자 면접 잘보는법 2탄',
        url: 'https://www.youtube.com/watch?v=XXX0VttsjAw&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=5',
        thumb: 'https://i.ytimg.com/vi/XXX0VttsjAw/hqdefault.jpg',
        progress: 0
      },

         {
        num: 7,
        title: '이런분들은 코딩 배워도 실패합니다',
        duration: '09분 12초',
        synopsis: '부트캠프 강사가 말하는 개발자 될놈과 안될놈',
        url: 'https://www.youtube.com/watch?v=tMIl7fcVXJY&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=7',
        thumb: 'https://i.ytimg.com/vi/tMIl7fcVXJY/hqdefault.jpg',
        progress: 0
      },
      {
        num: 8,
        title: '학원 강사가 본 학생유형 , 학원에 이런학생들 꼭있다...(코딩학원, 부트캠프 편)',
        duration: '03분 02초',
        synopsis: '강사생활 하면서 본 학생유형',
        url: 'https://www.youtube.com/watch?v=cug7HggqyXM&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=8',
        thumb: 'https://i.ytimg.com/vi/cug7HggqyXM/hqdefault.jpg',
        progress: 0
      },
     {
        num: 9,
        title: '대학교?부트캠프?독학? 코딩공부 방법 뭐가좋을까?',
        duration: '08분 20초',
        synopsis: '부트캠프 현직 강사가 알려주는 전격비교',
        url: 'https://www.youtube.com/watch?v=2sJX2oBxI2s&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=9',
        thumb: 'https://i.ytimg.com/vi/2sJX2oBxI2s/hqdefault.jpg',
        progress: 0
      },
     {
        num: 10,
        title: '정말 이분 한대로만 따라하면 개발자 취업 가능합니다 (대단주의) | 누나강의를 들으면 개발자가 될 수 있을까?',
        duration: '25분 41초',
        synopsis: '정말 이분 한대로만 따라하면 개발자 취업 가능합니다 (대단주의)',
        url: 'https://www.youtube.com/watch?v=cn9bS6OAWxY&list=PLKvVQ9ZQzjVloqDR0aqzmPR9IGwrvYNL4&index=10',
        thumb: 'https://i.ytimg.com/vi/cn9bS6OAWxY/hqdefault.jpg',
        progress: 0
      }
    ]
  },
    

    list4: {
    title: '환경설정과 배포강의',
    desc: '웹사이트 개발후 도메인 얻는법!',
    year: '2024',
    count: '2개 영상',
    episodes: [
      {
        num: 1,
        title: '로컬호스트를 탈출하자!',
        duration: '10분 09초',
        synopsis: '웹사이트 배포하는 법, Netlify 면 버튼하나면 충분',
        url: 'https://www.youtube.com/watch?v=WJtetccrv3o&list=PLKvVQ9ZQzjVk_dQOD8AIU-qulmpO1ZXLg',
        thumb: 'https://i.ytimg.com/vi/WJtetccrv3o/hqdefault.jpg',
        progress: 100
      },
      {
        num: 2,
        title: '다른데서 헤메지말고 그냥 이거 보면 한큐에 끝남 + 윈도우 필수 커맨드 머리에 때려박아드림',
        duration: '18분 07초',
        synopsis: 'repli.it을 써오다가 드디어 전문가툴로 함 코딩을 해보고싶으신 분들에게 도움이 될 영상',
        url: 'https://www.youtube.com/watch?v=Hm2DvKtDsgs&list=PLKvVQ9ZQzjVk_dQOD8AIU-qulmpO1ZXLg&index=2',
        thumb: 'https://i.ytimg.com/vi/Hm2DvKtDsgs/hqdefault.jpg',
        progress: 0

          }
        ]
      },

  list5: {
    title: '누나의 일상',
    desc: '',
    year: '2024',
    count: '8개 영상',
    episodes: [
      {
        num: 1,
        title: '[크리스마스 특집 Vlog] 누나의 친구들을 소개합니다(웃김주의). 고등학교 찐친들이랑 보내는 크리스마스',
        duration: '04분 29초',
        synopsis: '오랜만에 한국에서 보내는 크리스마스가 너무 설레서 영상으로 한번 제작해봤어요.  제 학상시절 베프들을 소개합니다 ',
        url: 'https://www.youtube.com/watch?v=DxURWYCgsWU&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=1',
        thumb: 'https://i.ytimg.com/vi/DxURWYCgsWU/hqdefault.jpg',
        progress: 100
      },
      {
        num: 2,
        title: '코딩알려주는 누나 그녀가 궁금하다',
        duration: '12분 09초',
        synopsis: '신입 개발자 나이? 포트폴리오개수? 개발 실력을 쌓는법? 등 개발관련 질문 다 받는다 | 2만기념 Q&A',
        url: 'https://www.youtube.com/watch?v=V3Zssso35Ks&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=2&t=53s',
        thumb: 'https://i.ytimg.com/vi/V3Zssso35Ks/hqdefault.jpg',
        progress: 100
      },
      {
        num: 3,
        title: '남들과 다른길을가는 친구 이야기 (ft. MZ세대가 불안한 이유)',
        duration: '17분 35초',
        synopsis: '라이브커머스 쇼호스트의 삶',
        url: 'https://www.youtube.com/watch?v=8fg0xxglmQk&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=3',
        thumb: 'https://i.ytimg.com/vi/8fg0xxglmQk/hqdefault.jpg',
        progress: 0
      },
      {
        num: 4,
        title: '개발자 프리랜서의 모든것을 물어봤습니다.',
        duration: '08분 52초',
        synopsis: '컴퓨터 공학과를 나와서 개발자를 5개월만에 때려친 친구이야기',
        url: 'https://www.youtube.com/watch?v=1Wwevxy_ius&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=4',
        thumb: 'https://i.ytimg.com/vi/1Wwevxy_ius/hqdefault.jpg',
        progress: 0
      },
   
      {
        num: 5,
        title: '해외취업 설레는 출근길을 담아봤습니다',
        duration: '06분 25초',
        synopsis: '해외취업 브이로그 | 베트남 살이 시작.',
        url: 'https://www.youtube.com/watch?v=ysX4B0JMjmE&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=7',
        thumb: 'https://i.ytimg.com/vi/ysX4B0JMjmE/hqdefault.jpg',
        progress: 0
      },

        {
        num: 6,
        title: '돈은 당신을 행복하게 하지 않는다, 많이 행복할뿐',
        duration: '12분 23초',
        synopsis: '스페인 마드리드 세비야 나홀로 여행',
        url: 'https://www.youtube.com/watch?v=nJBNAkJuUI0&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=6',
        thumb: 'https://i.ytimg.com/vi/nJBNAkJuUI0/hqdefault.jpg',
        progress: 0
      },

         {
        num: 7,
        title: '해외취업 6개월 만에 퇴사한 이유',
        duration: '09분 54초',
        synopsis: '개발자 퇴사 브이로그| 서른살에 대기업 퇴사 이유',
        url: 'https://www.youtube.com/watch?v=XkyCFd-TdcI&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=5',
        thumb: 'https://i.ytimg.com/vi/XkyCFd-TdcI/hqdefault.jpg',
        progress: 0
      },
      {
        num: 8,
        title: '내가 결혼을 못하는 이유 : 숨만 쉬어도 웃긴 제 친구들을 소개합니당',
        duration: '12분 46초',
        synopsis: '코타키나발루 여행',
        url: 'https://www.youtube.com/watch?v=VOT_sveY-dA&list=PLKvVQ9ZQzjVl1A7LxF8ub6bj-4mcmxX1f&index=8',
        thumb: 'https://i.ytimg.com/vi/VOT_sveY-dA/hqdefault.jpg',
        progress: 0
      }
    ]
  },
    

  list6: {
    title: 'HTML/CSS 강의',
    desc: '기초부터 실전까지, 프론트엔드 개발자를 위한 HTML/CSS 강의 모음',
    year: '2024',
    count: '8개 영상',
    episodes: [
      {
        num: 1,
        title: '메뉴 밑줄 슬라이딩 애니메이션 만들기 | 간단해 보이지만 막상 하려니 잘 모르겠는 그것',
        duration: '18분 55초',
        synopsis: 'Css html태그 선택법 :first-child, position:absolute, offset, 스무스한 애니메이션 트랜지션 넣기',
        url: 'https://www.youtube.com/watch?v=O54PjSD9BUg&list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn&index=1&t=4s',
        thumb: 'https://i.ytimg.com/vi/O54PjSD9BUg/hqdefault.jpg',
        progress: 100
      },
      {
        num: 2,
        title: '초보자를 위한 완벽정리, 프론트엔드 개발자 입문 : CSS, 완벽한 포트폴리오를 위한 지름길',
        duration: '17분 51초',
        synopsis: 'Css 작성하는 방법 : color, img, boder, padding, margin',
        url: 'https://youtu.be/sZXr_4fmz5o?list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn',
        thumb: 'https://i.ytimg.com/vi/sZXr_4fmz5o/hqdefault.jpg',
        progress: 100
      },
      {
        num: 3,
        title: '코딩, 뭐부터 배울지 모르겠다면 여기부터 시작하면됨, 초보자를 위한 HTML강의, 바로 코딩 가능',
        duration: '17분 04초',
        synopsis: 'HTML,CSS의 구조를 알아보자',
        url: 'https://www.youtube.com/watch?v=CpUmhGdUHEA&list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn&index=4',
        thumb: 'https://i.ytimg.com/vi/CpUmhGdUHEA/hqdefault.jpg',
        progress: 0
      },
      {
        num: 4,
        title: '웹사이트에 애니메이션 효과를 어떻게 줄까? | css : keyframes 남들과 다른 웹사이트 만들기 첫번째',
        duration: '24분 30초',
        synopsis: '웹사이트 디자인 : 스타벅스 웹페이지 만들어보기',
        url: 'https://www.youtube.com/watch?v=ru5FGYuycwY&list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn&index=6',
        thumb: 'https://i.ytimg.com/vi/ru5FGYuycwY/hqdefault.jpg',
        progress: 0
      },
      {
        num: 5,
        title: '넷플릭스 스타일의 웹사이트는 어떻게만들까? | CSS linear-gradient 사용법에 대해 알아보자.',
        duration: '12분 45초',
        synopsis: '웹사이트가 좀더 간지나보일수 있는 넷플릭스 느낌의 UI 만드는법중 하나인 gradient',
        url: 'https://www.youtube.com/watch?v=zLtUPIPum00&list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn&index=7',
        thumb: 'https://i.ytimg.com/vi/zLtUPIPum00/hqdefault.jpg',
        progress: 0
      },
      {
        num: 6,
        title: '내 프로젝트가 촌스럽다고..? 폰트만 바꿔도 분위기가 확~사는 유니크한 폰트 적용법! | 구글폰트',
        duration: '7분 38초',
        synopsis: '내 웹사이트에 외부 폰트를 적용하는 법을 들고왔어요! 아주 간단한 팁이지만 아무도 안알려주면 절대 모를 폰트 적용하는법!',
        url: 'https://www.youtube.com/watch?v=4fxgb3LkA7I&list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn&index=8',
        thumb: 'https://i.ytimg.com/vi/4fxgb3LkA7I/hqdefault.jpg',
        progress: 0
      },
      {
        num: 7,
        title: '반응형 웹페이지 제일 쉽게 만드는 법, 부트스트랩 사용법 완벽하게 익히자 (설명 쉬움)',
        duration: '23분 08초',
        synopsis: '반응형 웹사이트를 쉽게 만들 수 있고 우리를 css늪으로 부터 탈출 시켜줄 부트스트랩!',
        url: 'https://www.youtube.com/watch?v=3Az_hKsL9L8&list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn&index=9',
        thumb: 'https://i.ytimg.com/vi/3Az_hKsL9L8/hqdefault.jpg',
        progress: 0
      },
      {
        num: 8,
        title: '웹개발자면서 이것도 모름? | DOM과 CSSOM, 렌더링 과정',
        duration: '34분 01초',
        synopsis: '브라우저의 동작 원리에 대하여!',
        url: 'https://www.youtube.com/watch?v=Mqh13dNI8jc&list=PLKvVQ9ZQzjVkwahMynnQuY0E_ohMtzBxn&index=10',
        thumb: 'https://i.ytimg.com/vi/Mqh13dNI8jc/hqdefault.jpg',
        progress: 0
      }
    ]
  },


    list7: {
    title: '자바스크립트 프로젝트: 환율앱 만들기',
    desc: '자바스크립트 프로젝트를 만들어보자',
    year: '2022',
    count: '3개 영상',
    episodes: [
       {
        num: 1,
        title: '코딩배우고싶다고? 일단 만들어봐 내가 도와줄게 | 프로젝트를 통해 익히는 자바스크립트 환전앱 만들기',
        duration: '18분 12초',
        synopsis: '자바스크립트 첫번째 프로젝트 하나와 자바스크립트의 기본 원리',
        url: 'https://www.youtube.com/watch?v=1BF_BwW0LPs&list=PLKvVQ9ZQzjVnUB0AGuVx2_39RFgZQ91jD&index=1',
        thumb: 'https://i.ytimg.com/vi/1BF_BwW0LPs/hqdefault.jpg',
        progress: 100
      },
      {
        num: 2,
        title: '이론만 듣지말고 실제 프로젝트를 통해 프로그래밍 필수개념들을 바로! 배워보자! | 변수, 객체, 이벤트, 등... 이번영상에 담긴 개념 셀수없다',
        duration: '22분 13초',
        synopsis: '환율앱 만들기 2탄!',
        url: 'https://www.youtube.com/watch?v=G8tYiAJqBIQ&list=PLKvVQ9ZQzjVnUB0AGuVx2_39RFgZQ91jD&index=2',
        thumb: 'https://i.ytimg.com/vi/G8tYiAJqBIQ/hqdefault.jpg',
        progress: 100
      },
      {
        num: 3,
        title: '내가 이론으로 배운 개념은 실제 프로젝트에서 어떻게 쓰일까? 프로젝트로 배우는 자바스크립트!',
        duration: '19분 18초',
        synopsis: '환율앱 만들기 3탄!',
        url: 'https://www.youtube.com/watch?v=r-iSD2NoDxg&list=PLKvVQ9ZQzjVnUB0AGuVx2_39RFgZQ91jD&index=3',
        thumb: 'https://i.ytimg.com/vi/r-iSD2NoDxg/hqdefault.jpg',
        progress: 100
      }
    ]
  },


  list8: {
    title: '무한스크롤 만들기',
    desc: '무한스크롤을 가장 쉽게 만드는 강의 모음',
    year: '2025',
    count: '2개 영상',
    episodes: [
      {
        num: 1,
        title: '블로그 글읽기 귀찮은 분들을 위한 무한스크롤 만드는법',
        duration: '22분 39초',
        synopsis: '무한스크롤이란 1탄 : 리액트 쿼리의 중요성, API 호출 hook 실습 ....',
        url: 'https://www.youtube.com/watch?v=3Gch9RBD7-g&list=PLKvVQ9ZQzjVkdgOoRev4tgbUHSZ6JlFvP&index=2',
        thumb: 'https://i.ytimg.com/vi/3Gch9RBD7-g/hqdefault.jpg',
        progress: 100
      },
      {
        num: 2,
        title: '라이브러리 없이 무한 스크롤 가장 쉽게 만드는 법 알려드림 | 무한스크롤 만들기 2탄',
        duration: '22분 31초',
        synopsis: '무한스크롤이란 2탄 : state틀 실습, api 호출부, IntersectionObserver 사용법',
        url: 'https://www.youtube.com/watch?v=QEph95OWwPM&list=PLKvVQ9ZQzjVkdgOoRev4tgbUHSZ6JlFvP&index=1&t=2s',
        thumb: 'https://i.ytimg.com/vi/QEph95OWwPM/hqdefault.jpg',
        progress: 100
      }
    ]
  },


  list9: {
    title: '면접 및 취업 꿀팁',
    desc: '개발자 현실적인 면접 대응 꿀팁 모음',
    year: '2022',
    count: '6개 영상',
    episodes: [
     {
        num: 1,
        title: '시니어 개발자들은 보지마세요. 신입 or 주니어 개발자 면접 꿀팁 1탄 - 코딩테스트, 코딩 면접 잘보는 법',
        duration: '08분 32초',
        synopsis: '개발자 면접을 보면서 가지고있었던 개인적인 노하우 방출!',
        url: 'https://www.youtube.com/watch?v=HFEurBNmMwM&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=2',
        thumb: 'https://i.ytimg.com/vi/HFEurBNmMwM/hqdefault.jpg',
        progress: 100
      },
      {
        num: 2,
        title: '기술면접 모르는 질문 받았을때 대처법 | 시니어 개발자 분들은 보지 마세요 | 신입개발자, 주니어 개발자 면접 꿀팁',
        duration: '07분 51초',
        synopsis: '기술 면접 대처법, 신입개발자, 주니어개발자 면접 꿀팁 방출 2탄!',
        url: 'https://www.youtube.com/watch?v=4XNJFAPnZrY&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=1&t=4s',
        thumb: 'https://i.ytimg.com/vi/4XNJFAPnZrY/hqdefault.jpg',
        progress: 100
      },
      {
        num: 3,
        title: '면접 잘보는 법 | 면접관 입장에서 말하는 뽑고싶은 지원자와 안뽑고싶은 지원자는? | 매력있게 말하는 법',
        duration: '13분 10초',
        synopsis: '일반 인성면접에서 매력있는 사람으로 보일 수 있는 팁!',
        url: 'https://www.youtube.com/watch?v=mi0N-5-8LEc&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=4',
        thumb: 'https://i.ytimg.com/vi/mi0N-5-8LEc/hqdefault.jpg',
        progress: 100
      },
      {
        num: 4,
        title: '누구도 안알려주는 문과 대기업 프리패스 방법 | 문과전공 버리지 마세요. 문과가 "진짜" 입니다.',
        duration: '07분 15초',
        synopsis: '여러분들이 힘들게 배운 전공 버리지 마세요 문과가 사실 "진짜" 입니다',
        url: 'https://www.youtube.com/watch?v=0TF2ZFpSpxo&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=3',
        thumb: 'https://i.ytimg.com/vi/0TF2ZFpSpxo/hqdefault.jpg',
        progress: 0
      },
      {
        num: 5,
        title: '실제 겪어보고 깨달은 가장 현실적인 해외취업 방법. | 회사를 고를때 중요한것 | 해외에서 직장을 구하는 방법. | 베트남 취업',
        duration: '11분 24초',
        synopsis: '해외에 취업한 방법에 대해서 공유를 해드릴려고 합니다! 어떻게 직장을 구했는지! 제 경험을 공유해 봤습니다!',
        url: 'https://www.youtube.com/watch?v=pNqG6k8Yl9A&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=5',
        thumb: 'https://i.ytimg.com/vi/pNqG6k8Yl9A/hqdefault.jpg',
        progress: 0
      },
      {
        num: 6,
        title: '웹개발자면서 이것도 모름? | DOM과 CSSOM, 렌더링 과정',
        duration: '34분 01초',
        synopsis: '브라우저의 동적 원리부터 성능을 좋게 하는 방법 강의!',
        url: 'https://www.youtube.com/watch?v=Mqh13dNI8jc&list=PLKvVQ9ZQzjVk6TPYycw97M2q-kPoWRL1B&index=6&t=52s',
        thumb: 'https://i.ytimg.com/vi/Mqh13dNI8jc/hqdefault.jpg',
        progress: 0      
      }
    ]
  },

  

  list10: {
    title: '리액트로 할일앱 만들기',
    desc: 'for 초보자',
    year: '2022',
    count: '1개 영상',
    episodes: [
       {
        num: 1,
        title: '리액트로 할일앱을 만들어보자!(웃김주의) | 실제 리액트 개념이 어떻게 사용되는지 살펴보자| 리액트 초보자용',
        duration: '19분 19초',
        synopsis: '기본 컨셉: 컴포넌트,props,state를 가지고 프로젝트 실습!',
        url: 'https://www.youtube.com/watch?v=TjUju3aUIDM&list=PLKvVQ9ZQzjVlhns6485UURxLgkwm-kzvY&index=1v',
        thumb: 'https://i.ytimg.com/vi/TjUju3aUIDM/hqdefault.jpg',
        progress: 100
      }
    ]
  },

};

let currentPlaylist = 'list1';

function loadPlaylist(id) {
  const show = playlists[id];

  if (!show) {
    console.error(`playlists에 "${id}" 라는 키가 없습니다.`);
    return;
  }

  currentPlaylist = id;

  // ---- 메타 정보 (요소가 있을 때만 채움) ----
  const titleEl = document.getElementById('show-title');
  const descEl = document.getElementById('show-desc');
  const yearEl = document.getElementById('show-year');
  const countEl = document.getElementById('show-count');

  if (titleEl) titleEl.textContent = show.title;
  if (descEl) descEl.textContent = show.desc;
  if (yearEl) yearEl.textContent = show.year;
  if (countEl) countEl.textContent = show.count;

  // ---- 탭 활성화 (탭이 있을 때만) ----
  document.querySelectorAll('.playlist-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.playlist-tab[data-id="${id}"]`);
  if (activeTab) activeTab.classList.add('active');

  // ---- 에피소드 목록 렌더링 (항상 실행) ----
  const list = document.getElementById('ep-list');
  if (!list) {
    console.error('playlist.js: id="ep-list" 요소를 찾을 수 없습니다.');
    return;
  }

  list.innerHTML = show.episodes.map((ep, i) => `
    <div class="ep-item ${i === 0 ? 'active' : ''}" onclick="selectEp(this, '${ep.url}')">
      <div class="ep-num">${ep.num}</div>
      <div class="ep-thumb">
        <img src="${ep.thumb}" alt="썸네일">
        <div class="play-overlay">
          <div class="play-icon">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
      </div>
      <div class="ep-info">
        <div class="ep-info-top">
          <div class="ep-name">${ep.title}</div>
          <div class="ep-duration">${ep.duration}</div>
        </div>
        <div class="ep-synopsis">${ep.synopsis}</div>
        ${ep.progress > 0 ? `<div class="progress-bar"><div class="progress-fill" style="width:${ep.progress}%"></div></div>` : ''}
      </div>
    </div>
  `).join('');
}

function renderTabs() {
  const tabsEl = document.getElementById('playlist-tabs');
  if (!tabsEl) return; // 탭 영역이 없는 페이지는 건너뜀

  tabsEl.innerHTML = Object.entries(playlists).map(([id, show]) => `
    <div class="playlist-tab ${id === currentPlaylist ? 'active' : ''}" data-id="${id}" onclick="loadPlaylist('${id}')">
      ${show.title}
    </div>
  `).join('');
}

function selectEp(el, url) {
  document.querySelectorAll('.ep-item').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  window.open(url, '_blank');
}

// 페이지 로드 시 초기 실행
// 페이지에서 playlist.html?id=list1 형태로 열면
// 해당 재생목록의 에피소드 목록이 자동으로 표시됩니다.
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');

  const targetId = (requestedId && playlists[requestedId]) ? requestedId : 'list1';

  renderTabs();
  loadPlaylist(targetId);
});