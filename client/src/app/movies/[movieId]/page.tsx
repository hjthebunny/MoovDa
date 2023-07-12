'use client'
import * as S from './page.styled';
export default function MyPage() {
    return(
        <S.Wrapper>
            <S.MovieInfoWrapper>
                <S.PosterStar>
                    <S.PosterImg src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87034/87034_320.jpg" alt="영화 포스터" />
                    <S.MyStar>별점</S.MyStar>
                </S.PosterStar>
                <S.MovieInfo>
                    <S.Title>엘리멘탈</S.Title>
                    <S.DetailWrapper>
                    <S.DateAndCountry>2023 • 미국</S.DateAndCountry>
                    {/* <S.Country>미국</S.Country> */}
                    <S.Genre>애니메이션 / 모험 / 판타지 / SF / 로맨스</S.Genre>
                    <S.RunningTime>93분</S.RunningTime>
                    </S.DetailWrapper>
                    <S.Summary>
                        불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’
                        재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히
                        유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며,
                        지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데...</S.Summary>


                </S.MovieInfo>
            </S.MovieInfoWrapper>
        </S.Wrapper>
    )
}