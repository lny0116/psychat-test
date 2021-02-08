const dataList = [
    {
        title: "프리미엄 셀렉트샵 당신은 어떤 꽃인가요? MBTI LU42",
        url: "https://lu42.co.kr/campaign/flowergarden/mbti",
        type: "mbti",
    },
    {
        title: "프리미엄 셀렉트샵 당신은 어떤 꽃인가요? MBTI LU42",
        url: "https://lu42.co.kr/campaign/flowergarden/mbti",
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

module.exports = recommend;