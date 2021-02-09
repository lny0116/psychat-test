const dataList = [
    {
        title: "16Personalities MBTI 검사 | 전문기관",
        url: "https://www.16personalities.com/ko",
        type: "성격",
    },
    {
        title: "프리미엄 셀렉트샵 당신은 어떤 꽃인가요? MBTI LU42",
        url: "https://lu42.co.kr/campaign/flowergarden/mbti",
        type: "성격",
    },
    {
        title: "스낵으로 보는 내 성격, SPTI",
        url: "https://spti.snackpot.kr/",
        type: "성격",
    },
    {
        title: "나와 어울리는 동숲 주민은?",
        url: "https://dodamind.kr/test-ds/",
        type: "성격",
    },
    {
        title: "나와 찰떡궁합인 반려동물은?",
        url: "https://lovedoongdoong.com/",
        type: "성격",
    },
    {
        title: "무의식 속 숨은 동물 찾기 심리테스트",
        url: "https://myanimal.kokkiri.kr/",
        type: "성격",
    },
    {
        title: "남들이 보는 나의 핵심능력이 궁금하다면?",
        url: "https://mypower.spacecloud.kr/",
        type: "성격",
    },
    {
        title: "나의 주사 유형 테스트",
        url: "https://www.zutopia-test.com/",
        type: "성격",
    },
    {
        title: "찐학번테스트",
        url: "https://www.zzinhakbun.com/",
        type: "mbti",
    },
    {
        title: "첫인상 테스트",
        url: "https://banggooso.com/intro.html?idx=13",
        type: "mbti",
    },
    {
        title: "나는 어떤 유형의 부자일까?",
        url: "https://banggooso.com/intro.html?idx=18",
        type: "mbti",
    },
    {
        title: "연애력! 테스트",
        url: "https://poomang.com/amasia?c=1",
        type: "mbti",
    },
    {
        title: "수정구슬아, 내 전생을 보여줘!",
        url: "https://nelna.shop/nelna-mbti",
        type: "mbti",
    },
    {
        title: "나와 닮은 빌보드 스타는?",
        url: "https://www.billboardtest.co.kr/",
        type: "mbti",
    },
    {
        title: "연애고자 테스트",
        url: "https://poomang.com/chunmyung",
        type: "mbti",
    },
    {
        title: "일상재질 테스트",
        url: "https://www.jaju-lifestyle.com/",
        type: "mbti",
    },
    {
        title: "연애 부캐 테스트",
        url: "http://bodyfantasies.kr/web/event_booke/index.html",
        type: "mbti",
    },
    {
        title: "돈BTI 테스트",
        url: "https://banggooso.com/intro.html?idx=23",
        type: "mbti",
    },
    {
        title: "소울 테스트",
        url: "https://poomang.com/soul",
        type: "mbti",
    },
    {
        title: "찐본캐 테스트",
        url: "https://tarotmoon.co.kr/front/#/",
        type: "mbti",
    },
    {
        title: "술자리 유형테스트",
        url: "https://dailyshot-test.firebaseapp.com/",
        type: "mbti",
    },
    {
        title: "도시 스타일 테스트",
        url: "https://city.travelcode.kr/",
        type: "mbti",
    },
    {
        title: "전생에 나는 얼마나 부자였을까?",
        url: "https://event-stepup.cashslide.co.kr/mbti/",
        type: "mbti",
    },
    {
        title: "직장인이 된 나는 어떤 동물일까?",
        url: "https://sendy.ai/content-mbti",
        type: "mbti",
    },
    {
        title: "카톡 유형 테스트",
        url: "https://www.banggooso.com/intro.html?idx=10",
        type: "mbti",
    },
    {
        title: "썸 추진력 테스트",
        url: "https://mbti.theblessedmoon.com/#/ko/intro",
        type: "mbti",
    },
    {
        title: "현지인 테스트",
        url: "https://mindtest.travelmakerkorea.com/",
        type: "mbti",
    },
    {
        title: "2020 트렌드 능력고사",
        url: "https://www.trendtest.co.kr/",
        type: "mbti",
    },
    {
        title: "회사생활로 보는 나의 조선시대 직업",
        url: "https://78gak.com/mbti",
        type: "mbti",
    },
    {
        title: "전생템 테스트",
        url: "https://www.banggooso.com/intro.html?idx=12",
        type: "mbti",
    },
    {
        title: "나의 본캐 컬러는?",
        url: "https://hobbyful.co.kr/event/boradabang/",
        type: "mbti",
    },
    {
        title: "내가 아이돌이 된다면?",
        url: "https://banggooso.com/intro.html?idx=3",
        type: "mbti",
    },
    {
        title: "연애할 때 내 모습은?",
        url: "https://lovetarot.rwd.to/",
        type: "mbti",
    },
    {
        title: "나의 건물주력 테스트",
        url: "https://www.honestfund.kr/v2/exam/landlord",
        type: "mbti",
    },
    {
        title: "친구 유형 테스트",
        url: "https://mbti.wippy.io/",
        type: "mbti",
    },
    {
        title: "에고그램 테스트",
        url: "http://ego.na.to/test/ego/",
        type: "mbti",
    },
    {
        title: "내 안의 8가지 성격",
        url: "https://mgram.me/ko/",
        type: "mbti",
    },
    {
        title: "2021 우정 테스트 | 10가지",
        url: "https://grandedesafio.com/ko",
        type: "mbti",
    },
    {
        title: "색깔 심리 테스트",
        url: "http://aiselftest.com/colortest/",
        type: "mbti",
    },
    {
        title: "내 님을 찾아서",
        url: "https://2hakju.github.io/fonfon/",
        type: "mbti",
    },
    {
        title: "사랑 성향 테스트",
        url: "http://love.na.to/test/love/",
        type: "mbti",
    },
    {
        title: "심리학 테스트 | 객관식 모음",
        url: "http://phycho.na.to/test/phycho/",
        type: "mbti",
    },
    {
        title: "싸이코패스 테스트1",
        url: "http://psycho.na.to/test/psycho/",
        type: "mbti",
    },
    {
        title: "기대 수명 테스트 | 계산기",
        url: "http://life.na.to/test/life/",
        type: "mbti",
    },
    {
        title: "나만의 꽃 심기 | 스터디 친구 찾기",
        url: "https://forest-mt.seekrtech.com/",
        type: "mbti",
    },
    {
        title: "마음의 소리를 따르는 능력테스트",
        url: "https://nescafetest.co.kr/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 방탄소년단 멤버는?",
        url: "https://dodamind.kr/test-btsv2/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 대학교는?",
        url: "https://dodamind.kr/test-univ/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 오마이걸 멤버는?",
        url: "https://dodamind.kr/test-ohmygirl/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 아이즈원 멤버는?",
        url: "https://dodamind.kr/test-izone/",
        type: "mbti",
    },
    {
        title: "나의 인스타와 찰떡인 포토스팟은?",
        url: "https://dodamind.kr/test-ins/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 블랙핑크 멤버는?",
        url: "https://dodamind.kr/test-blackpink/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 레드벨벳 멤버는?",
        url: "https://dodamind.kr/test-rv-0/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 NCT Dream 멤버는?",
        url: "https://dodamind.kr/test-nctdream/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 itzy 멤버는?",
        url: "https://dodamind.kr/test-itzy/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 세븐틴 멤버는?",
        url: "https://dodamind.kr/test-seventeen/",
        type: "mbti",
    },
    {
        title: "나와 비슷한 대통령은?",
        url: "https://app.m-nitpick.com/v1/web/event/11/public",
        type: "mbti",
    },
    {
        title: "내 정신연령 테스트",
        url: "https://www.simcong.com/quiz/65",
        type: "mbti",
    },
    {
        title: "정신연령 테스트",
        url: "https://mentalagetest.kr/",
        type: "mbti",
    },
    {
        title: "직장 캐릭터 테스트",
        url: "http://psy.nitpick.co.kr/psytest/hyundai",
        type: "mbti",
    },
    {
        title: "코로나 성격 유형 테스트",
        url: "https://mythisyear.hingu.io/",
        type: "mbti",
    },
    {
        title: "전지적 타인 시점: 타인이 보는 나는?",
        url: "http://bnklab.kr/dyst1/",
        type: "mbti",
    },
    {
        title: "섹스 성향 테스트",
        url: "https://m.evecondoms.com/sex_mind_test/",
        type: "mbti",
    },
    {
        title: "도화테스트 | 당신의 치명적 매력은?",
        url: "https://mydohwa.forceteller.com/interactive/mydohwa",
        type: "mbti",
    },
    {
        title: "꼰대 성향 검사",
        url: "https://www.lllkkdti.com/",
        type: "mbti",
    },
    {
        title: "나는 전생에 어떤 집에 살았을까?",
        url: "https://ohou.se/promotions/ten_million_download?type=share",
        type: "mbti",
    },
    {
        title: "쿠키런에서 나는 어떤 쿠키일까?",
        url: "http://www.cookieruntest.com/",
        type: "mbti",
    },
    {
        title: "호구 성향 테스트",
        url: "https://www.hogutest.com/",
        type: "mbti",
    },
    {
        title: "직장 생존 능력 고사",
        url: "https://www.banggooso.com/intro.html?idx=11",
        type: "mbti",
    },
    {
        title: "나는 어떤 산타일까?",
        url: "https://santa.signal.love/kakao#/",
        type: "mbti",
    },
    {
        title: "절대음감 테스트",
        url: "https://www.simcong.com/content/absolute_pitch",
        type: "mbti",
    },
    {
        title: "자존감 테스트",
        url: "https://www.simcong.com/quiz/136",
        type: "mbti",
    },
    {
        title: "나와 비슷한 연예인(MC)은 누구일까?",
        url: "https://app.m-nitpick.com/psytest/mc",
        type: "mbti",
    },
    {
        title: "공감지수 테스트",
        url: "http://sciencebooks.minumsa.com/eq-test/",
        type: "mbti",
    },
    {
        title: "성격으로 알아보는 내 영어 이름",
        url: "http://event.tutoringlab.net/",
        type: "mbti",
    },
    {
        title: "당신의 전생은 누구였을까요?",
        url: "https://www.arealme.com/lastlife/ko/",
        type: "mbti",
    },
    {
        title: "야망과 두려움 테스트",
        url: "https://www.simcong.com/quiz/115",
        type: "mbti",
    },
    {
        title: "좌/우뇌 테스트",
        url: "http://www.brainsidetest.com/",
        type: "mbti",
    },
    {
        title: "나르시시즘 테스트",
        url: "https://simritest.com/narcissism",
        type: "mbti",
    },
    {
        title: "싸이코패스 테스트2",
        url: "https://simritest.com/psychopath",
        type: "mbti",
    },
    {
        title: "반응속도 테스트",
        url: "https://simritest.com/reaction",
        type: "mbti",
    },
    {
        title: "대인기피증 테스트",
        url: "https://simritest.com/anthropophobia",
        type: "mbti",
    },
    {
        title: "시크릿곤쥬 테스트",
        url: "https://poomang.com/secret_gonzu",
        type: "mbti",
    },
    {
        title: "음란마귀 테스트",
        url: "https://stype.bareble.shop/#/",
        type: "mbti",
    },
    {
        title: "퍼스널 컬러 테스트",
        url: "https://kapable.github.io/kapable.github.io/personalColor/",
        type: "mbti",
    },
    {
        title: "우리 반에서 나는 어떤 캐릭터?",
        url: "https://event.seoltab.com/",
        type: "mbti",
    },
    {
        title: "마음의 방 테스트",
        url: "https://mind-room.syeon.studio/",
        type: "mbti",
    },
    {
        title: "내가 신이라면?",
        url: "https://www.banggooso.com/intro.html?idx=25",
        type: "mbti",
    },
    {
        title: "환생 테스트",
        url: "https://www.banggooso.com/intro.html?idx=22",
        type: "mbti",
    },
    {
        title: "연애 매력 테스트",
        url: "https://www.banggooso.com/intro.html?idx=17",
        type: "mbti",
    },
    {
        title: "초능력 테스트",
        url: "https://www.banggooso.com/intro.html?idx=14",
        type: "mbti",
    },
    {
        title: "인터넷 밈 고인물 테스트",
        url: "https://www.banggooso.com/intro.html?idx=1",
        type: "mbti",
    },
    {
        title: "반려견 관계 테스트",
        url: "https://www.banggooso.com/intro.html?idx=5",
        type: "mbti",
    },
    {
        title: "연애 능력 테스트",
        url: "https://www.banggooso.com/intro.html?idx=2",
        type: "mbti",
    },
    {
        title: "2021 먹잘알 능력 고사",
        url: "https://www.banggooso.com/intro.html?idx=19",
        type: "mbti",
    },
    {
        title: "지브리 애니메이션 테스트",
        url: "https://www.arealme.com/which-miyazaki-character-are-you/ko/",
        type: "mbti",
    },
    {
        title: "당신의 교실 mbti는?",
        url: "https://flash.inco.ai/",
        type: "mbti",
    },
    {
        title: "금융성향 테스트",
        url: "http://funuppity.com/",
        type: "mbti",
    },
    {
        title: "스위트홈 생존 테스트",
        url: "https://kr.vonvon.me/quiz/19386",
        type: "mbti",
    },
    {
        title: "지친 나, 나는 지금 어디쯤에 있을까? | Midnight Train",
        url: "https://midnight.rwd.to/?sid=pgBOzHdwzn",
        type: "mbti",
    },
    {
        title: "직장인 부캐테스트",
        url: "https://poomang.com/snek?from_detail=True",
        type: "mbti",
    },
    {
        title: "불효자 테스트",
        url: "https://poomang.com/rebrush?from_detail=True",
        type: "mbti",
    },
    {
        title: "나와 어울리는 나무 찾기",
        url: "https://www.woorisup.com/",
        type: "mbti",
    },
    {
        title: "취침 유형 테스트",
        url: "http://sealy.co.kr/myBedType",
        type: "mbti",
    },
    {
        title: "직장인 증후군 테스트",
        url: "https://www.saramin.co.kr/zf_user/syndrome",
        type: "mbti",
    },
    {
        title: "유튜버 잠재력 테스트",
        url: "http://hellocreators.much-merch.com/",
        type: "mbti",
    },
    {
        title: "멍BTI | 나는 어떤 개일까?",
        url: "https://www.lifeplus.co.kr/pet/mbti/intro.html",
        type: "mbti",
    },
    {
        title: "나의 보석 찾기",
        url: "http://devdory.com/entertainment/jewelry_mbti/",
        type: "mbti",
    },
    {
        title: "열대과일 mbti",
        url: "http://devdory.com/entertainment/fruit_mbti/",
        type: "mbti",
    },
    {
        title: "길거리 음식 테스트 | 스트리트푸드",
        url: "https://poomang.com/frip?from_detail=True",
        type: "mbti",
    },
    {
        title: "나와 어울리는 케이팝 스타",
        url: "https://kpop.kooky.io/",
        type: "mbti",
    },
    {
        title: "영화유형 찾기",
        url: "https://sujeongsumpro.1713074.repl.co/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 시집은?",
        url: "http://baesisiproject.pythonanywhere.com/",
        type: "mbti",
    },
    {
        title: "칵테일 연애 유형 테스트",
        url: "https://mongle.io/cocktail",
        type: "mbti",
    },
    {
        title: "밥상 테스트",
        url: "https://poomang.com/witchstick?from_detail=True",
        type: "mbti",
    },
    {
        title: "영화&드라마 속 내 부캐 찾기",
        url: "https://avatar.kinolights.com/",
        type: "mbti",
    },
    {
        title: "나와 어울리는 동네는?",
        url: "http://mvlookti.com/",
        type: "mbti",
    },
    {
        title: "장 능력 레벨 테스트",
        url: "http://vitaminhouse.df-host.co.kr/mobile/",
        type: "mbti",
    },
    {
        title: "케이크 테스트",
        url: "https://testmori.com/cake",
        type: "mbti",
    },
    {
        title: "행성으로 보는 뷰티 성향테스트",
        url: "https://ilotteshopping.com/beauty_test/",
        type: "mbti",
    },
    {
        title: "내가 폰으로 태어난다면? | 환생",
        url: "https://m.i-m-all.com/event/mbti",
        type: "mbti",
    },
    {
        title: "부자 나이 예측기",
        url: "https://www.myfirstrich.com/",
        type: "mbti",
    },
    {
        title: "내가 '하이틴 무비'에 출연한다면?",
        url: "https://ilotteshopping.com/highteen_test/",
        type: "mbti",
    },
    {
        title: "나와 찰떡인 넷플릭스 콘첸츠는?",
        url: "https://www.ollehtvnbti.com/",
        type: "mbti",
    },
    {
        title: "19금 능력치 테스트",
        url: "https://loma.xyz/19types/intro",
        type: "mbti",
    },
    {
        title: "동물상 테스트",
        url: "https://animalface.site/ko/index.html",
        type: "mbti",
    },
    {
        title: "나에게 어울리는 향수는?",
        url: "https://purfumeanee.web.app/",
        type: "mbti",
    },
    {
        title: "저세상 연애상대 테스트",
        url: "http://halloween.glam.am/intro?",
        type: "mbti",
    },
    {
        title: "데뷔캐 테스트 | 음악 취향",
        url: "https://kr.vonvon.me/q/_24pze7u57y4frml32",
        type: "mbti",
    },
    {
        title: "관상 테스트",
        url: "https://keen-poitras-075b07.netlify.app/",
        type: "mbti",
    },
    {
        title: "전생으로 보는 숙소 취향",
        url: "https://www.goodchoice.kr/more/Mylikingtest",
        type: "mbti",
    },
];

function recommend(type) {
    const result = [];

    for (let data of dataList) {
        if (data.type === type) {
            result.push(data);
        }
    }

    return result;
}
