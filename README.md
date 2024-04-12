![header](https://capsule-render.vercel.app/api?type=soft&color=01123d&fontColor=ffffff&height=150&section=header&text=MoovDa&fontSize=60)

````
MoovDa는 영화에 대한 평가와 리뷰를 자유롭게 공유하는 곳입니다.
영화 제목, 감독, 배우, 장르 등 다양한 정보를 활용하여 원하는 영화를 정확히 검색할 수 있습니다.
영화 리뷰와 추천을 통해 다른 사람들의 의견을 듣고, 자신만의 영화 리스트를 만들 수 있습니다. 
다양한 영화들을 살펴보고 다른 사용자들과 의견을 공유하여 영화에 대한 새로운 관점을 얻어보세요.
````

👩‍💻 담당 구현 코드 
-------------------
- [MainPoster(영화포스터 컴포넌트)](https://github.com/hjthebunny/MoovDa/tree/main/client/src/components/MainPoster)
- [MainPage](https://github.com/hjthebunny/MoovDa/blob/main/client/src/app/page.tsx)
    * [MainCarousel](https://github.com/hjthebunny/MoovDa/tree/main/client/src/components/MainCarousel)
- [MovieDetailPage](https://github.com/hjthebunny/MoovDa/tree/main/client/src/app/movies/%5BmovieId%5D)
    * Comment
        - [CommentBox](https://github.com/hjthebunny/MoovDa/tree/main/client/src/components/CommentBox)
        - [CommentModal](https://github.com/hjthebunny/MoovDa/tree/main/client/src/components/CommentModal)
        - [Starrate](https://github.com/hjthebunny/MoovDa/tree/main/client/src/components/Starrate)
   * [StaffBox](https://github.com/hjthebunny/MoovDa/blob/main/client/src/components/StaffBox/StaffBox.tsx)
- [MyPage](https://github.com/hjthebunny/MoovDa/tree/main/client/src/app/(membership)/mypage/%5BmemberId%5D)
- [MyCarousel](https://github.com/hjthebunny/MoovDa/blob/main/client/src/components/MyCarousel/MyCarousel.tsx)
      

<br><br>
주요 기능 preview
----------------
<div align="center">

**1 메인페이지**

![메인페이지](https://github.com/codestates-seb/seb44_main_020/assets/64067205/4bf7259f-fbcd-4919-93f4-c3ff6895241e)

<br>

**2 Login**

![로그인 앤 마이페이지](https://github.com/codestates-seb/seb44_main_020/assets/64067205/e12ee450-0601-4988-b086-3ad2f15fd1e8)

<br>



**3 Movie Search**

![영화 필터 검색](https://github.com/codestates-seb/seb44_main_020/assets/64067205/f9a857d5-f3bb-4232-973d-08058432df4d)

<br>


**4 Movie Detail**

![영화 상세](https://github.com/codestates-seb/seb44_main_020/assets/64067205/5e2a6cab-9b0c-4a0e-b8b8-acdb62529d7d)

<br>


**5 Comment**

![코멘트 작성](https://github.com/codestates-seb/seb44_main_020/assets/64067205/98bd7004-4b82-4811-a884-371f96a86195)

<br>

- <b>Comment Like</b>

![코멘트 좋아요](https://github.com/codestates-seb/seb44_main_020/assets/64067205/8d6e7ae2-78d4-444f-bd99-676bbb952b19)

<br>


- <b>To Watch</b>

![볼 영화 추가](https://github.com/codestates-seb/seb44_main_020/assets/64067205/d5d12ed7-c3c9-4750-8be5-fecdc94ac7e7)

<br>


- <b>Question</b>

![질문 작성](https://github.com/codestates-seb/seb44_main_020/assets/64067205/3cd52e3e-1fe0-4a62-a5bf-64d481d2b40c)

<br>

- <b>Answer</b>

![답변 작성](https://github.com/codestates-seb/seb44_main_020/assets/64067205/ac6e4783-5138-42e9-bde5-02d2ebc615a0)

<br>
</div>

<br><br>



### Frontend 

- <b>안현지</b> <br>
`소중한 경험 자산`
한 달 채 안되는 기간동안 프로젝트를 진행하면서 정말 다양한 상황들을 마주했습니다. 일정이 짧아 한정된 시간 안에 프로젝트 기획과 디자인, 개발까지 완성하는 것은 결코 쉬운 일이 아니었습니다. 이번 프로젝트를 통해 팀원 간 소통의 중요성을 다시 한 번 깨달았습니다. 지속적인 커뮤니케이션과 피드백을 하면서 최선의 결과를 도출하기 위해 노력했습니다. 또한 팀원 모두가 팀 내의 진행 상황을 파악해가며 다 함께 페이스를 맞추는 것이 중요한 일임을 느꼈습니다. 프로젝트 중간중간 어려움과 절망도 있었지만 결국 해결해내는 모습을 보면서 이 또한 유의미한 경험으로 받아들일 수 있었습니다. 
<details>
<summary>안현지 Worklog📜</summary>

<br>

 <b>Position</b> : Frontend

 <b>Stack</b> : Typescript, ReactJS, NextJS, Redux Toolkit, Styled Components

 <b>Works</b> : 

1. 페이지 UI 구성 및 피그마 이용해 프로토타입 구현
    * 메인 페이지
    * 질문 리스트 페이지
    * 질문 상세 페이지 

2. MainPoster 컴포넌트
    * props를 전달하여 조건부 렌더링
      * default : 영화 포스터 + 제목
      * 본영화 섹션에서 사용될 때, 별점 노출
      * 볼영화 섹션에서 사용될 때, (마이페이지의 삭제 버튼을 누르면) 삭제 아이콘 노출
    * styled-components의 ThemeProvider 적용 
      *  컴포넌트의 크기를 유동적으로 조정하여 여러 페이지에서 재사용할 수 있도록 함
    * 볼영화 삭제 기능 구현

3. MainPage
    * 자동 재생되는 캐러셀 슬라이더 구현
      * react-slick 라이브러리 사용 (centermode 적용)
    * 영화 포스터 조회 기능 구현

4. MyPage
    * UI 디자인 재구성
    * 로그인한 본인의 마이페이지인 경우와 타 사용자의 프로필을 클릭하여 방문하는 경우를 구분하여 조건부 렌더링
       * 로그인한 사용자 본인의 페이지인 경우에만 볼 영화의 편집 버튼을 노출 <br>
         -> 클릭하면 메인 포스터 컴포넌트의 삭제 아이콘 노출
       * 로그인한 사용자 본인의 페이지인 경우에만 계정 관리 영역 노출
    * 볼 영화, 본 영화 리스트
        * react-slick 사용하여 캐러셀 슬라이더 구현 
        * 캐러셀 드래그 시 클릭 이벤트(영화 상세페이지로 이동) 실행되는 것 방지
    * 회원 정보 조회, 회원 삭제 기능 구현

5. MovieDetail Page
    * 영화 상세 정보 조회
    * UI 디자인 재구성
    * 코멘트
        * 모달 팝업
        * 별점 구현
        * 코멘트 CRUD
            * 코멘트 추가 시 본 영화 리스트 추가
            * 코멘트 삭제 시 본 영화 리스트 삭제
        * 리스트 페이지네이션 적용
        * 코멘트 좋아요 구현
            * 좋아요 아이콘 클릭 시 리렌더링 전 까지는 클라이언트 측에서 UI 임시 반영(좋아요 수 변경, 좋아요 상태에 따른 아이콘 색 변경)
    * 볼 영화 리스트 추가, 기능 구현
6. Footer
    * footer UI 수정
</details>
<br>

 
<br><br><br>

## Technologies used 

### Frontend

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"  height="30"/> <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white"  height="30"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"  height="30"/> <br>
<img src="https://img.shields.io/badge/StyledComponets-DB7093?style=flat&logo=styledcomponents&logoColor=white"  height="30"/>
<img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=flat&logo=redux&logoColor=white"  height="30"/>

<br><br>

### Backend
<img src="https://img.shields.io/badge/Spring%20Boot-339933?style=flat-square&logo=springboot&logoColor=white" height="30" /> <img src="https://img.shields.io/badge/Spring%20Data%20JPA-339933?style=flat-square&logo=spring&logoColor=white" height="30" />
<img src="https://img.shields.io/badge/Spring%20Security-339933?style=flat-square&logo=springsecurity&logoColor=white" height="30" /> <br>
<img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" height="30" />
<img src="https://img.shields.io/badge/OAuth2.0-2C2255?style=flat-square&logo=google&logoColor=white" height="30" />
<img src="https://img.shields.io/badge/Querydsl-00BFFF?style=flat-square&logo=qualcomm&logoColor=white" height="30" />




<br><br>

### Deployment
<img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" height="30" /> <img src="https://img.shields.io/badge/EC2-FF9900?style=flat-square&logo=amazonec2&logoColor=white" height="30" /> 
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" height="30" />  <br>
<img src="https://img.shields.io/badge/RDS-527FFF?style=flat-square&logo=amazonrds&logoColor=white" height="30" />
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" height="30" />



<br><br>

### Project Management
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" height="30" /> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white" height="30" /> 
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white" height="30" />
<img src="https://img.shields.io/badge/Zoom-2D8CFF?style=flat-square&logo=zoom&logoColor=white" height="30" />



