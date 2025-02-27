# Calendar 컴포넌트 만들기

## 프로젝트 구성

- React, Typescript, vanilla-extract/css를 활용해 Calendar 컴포넌트를 만들어줘
- ![달력 디자인](../assets/Calendar.png) 디자인 파일이야 이미지를 Import하진 말아줘

## 파일 구성

- 컴포넌트 파일 이름은 index.tsx 로 해줘
- 컴포넌트 파일 위치는 src/CalendarMD 폴더에 넣어줘
- css파일은 index.css.ts 로 해줘

## 로직 구성

1. 달력의 헤더부분은 연도와 월이 표시돼야해

   - 왼쪽 화살표 아이콘과 오른쪽 화살표 아이콘을 각각 클릭하면 이전, 다음 월로 이동 로직도 함께 구현해줘
     - ex) 4월에서 3월로 이동하면 3월에 맞는 날짜가 나와야해

2. 날짜 셀 로직은 아래와 같아

   - 날짜 셀은 최대 5줄까지만 표시해줘
   - 날짜는 현재월의 날짜 이전 월의 날짜 다음월의 날짜가 같이 표시돼야하며 이전 월의 날짜 와 다음 월의 날짜는 disabled 표시 로직으로 반드시 구현해줘
   - 날짜는 두개 선택 할 수 있으며 useState로 가지고 있을거야
   - 선택한 두개 날짜 사이의 모든 날짜들 색상을 변경해주는 로직을 만들어줘
     - ex) 14일 선택 21일 선택하면 14일 ~ 21일사이의 모든 날짜가 색상변경이되어야하고 21일 선택 14일 선택하여도 동일하게 14일 ~ 21일사이의 모든 날짜가 색상변경이 되어야해

3. aria 속성도 추가해줘
   - 버튼에 aria-label 속성 추가
   - 선택된 날짜에 aria-selected 속성 추가
4. 웹 표준 태그 준수
   - Click event가 있는 button 태그로 변경
5. 키보드 이벤트 추가

   - Tab 키는 다음 포커스가능한 element로 이동해줘
   - 포커스가 날짜에 있는 상태에서 방향키를 누르면 각해당하는 날짜로 이동하게되
   - 첫번째행에서 방향키 위를 누르면 마지막행에서 부터 포커스가 가능한 행을 찾아 이동해
   - 마지막행에서 방향키 아래를 누르면 첫번쨰행에서 부터 포커스가 가능한 행을 찾아 이동해
   - 첫번째 열에서 방향키 왼쪽을 누르면 마지막 열로 이동해
   - 마지막 열에서 방향키 오른쪽을 누르면 첫번째 열로 이동해
   - 첫째날에서 방향키 왼쪽을 누르면 마지막 날로 이동해
   - 마지막날에서 방향키 오른쪽을 누르면 첫째날로 이동해

6. 날짜 셀의 색상 정보야

   - 첫번째날짜와 마지막날짜의 색상 정보는 backgroundColor: primary500, color: white 이렇게 해줘
   - 첫번째날짜와 마지막날짜 사이 색상정보는 backgroundColor: primary100, color: white 이렇게 해줘
   - disabled 날짜 색상 정보는 backgroundColor: disabled, color: gray300 이렇게 해줘
   - 그외 날짜 색상은 backgroundColor: white, color: black 이렇게 해줘

## CSS 구성

- 로직에 맞게 vanilla-extract/css로 스타일을 작성해줘
- palette 색상 정보 primary500: '#006879’, primary100: '#A9EDFF’, disabled: '#ddd’,  gray300: '#aaa'
- palette는 변수로 관리해줘

## 고려사항

- 로직을 간단하게 말고 실제 사용할수 있게 만들어줘
- 날짜관련 라이브러리는 dayjs를 사용해줘
- type error가 발생하지 않게 해줘
- 로직구성에 빠진것이 있는지 한번 더 체크해줘
- 이미지와 비슷하게 css를 만들었는지 한번 더 체크해줘
- 주석은 모두 한글로 작성해줘
