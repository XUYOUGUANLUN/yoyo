// 預設顧客資料
const customerData = [
    {
        id: "C001",
        name: "Passion",
        role: "customer",
        rooms: [
            { day: 1, hotel: "麗寶大飯店", number: "101" },
            { day: 2, hotel: "麗寶大飯店", number: "102" },
            { day: 3, hotel: "日月潭大飯店", number: "201" },
            { day: 4, hotel: "日月潭大飯店", number: "202" },
            { day: 5, hotel: "台中大飯店", number: "301" }
        ],
        emergency: {
            name: "XXX",
            phone: "0900000000"
        },
        itinerary: [
            {
                day: 1,
                schedule: [
                    { time: "9:00-11:00", activity: "集合出發" },
                    { time: "11:00-12:00", activity: "午餐" },
                    { time: "12:30-15:00", activity: "景點遊覽" },
                    { time: "15:30-17:00", activity: "自由活動" },
                    { time: "18:00-19:00", activity: "晚餐" }
                ]
            },
            {
                day: 2,
                schedule: [
                    { time: "8:00-9:00", activity: "早餐" },
                    { time: "9:30-12:00", activity: "登山健行" },
                    { time: "12:30-13:30", activity: "午餐" },
                    { time: "14:00-17:00", activity: "湖邊遊船" },
                    { time: "18:00-19:00", activity: "晚餐" }
                ]
            },
            {
                day: 3,
                schedule: [
                    { time: "8:00-9:00", activity: "早餐" },
                    { time: "9:30-12:00", activity: "文化博物館參觀" },
                    { time: "12:30-13:30", activity: "午餐" },
                    { time: "14:00-16:00", activity: "手作工坊" },
                    { time: "16:30-18:00", activity: "自由活動" },
                    { time: "18:30-19:30", activity: "晚餐" }
                ]
            },
            {
                day: 4,
                schedule: [
                    { time: "8:00-9:00", activity: "早餐" },
                    { time: "9:30-12:00", activity: "參觀植物園" },
                    { time: "12:30-13:30", activity: "午餐" },
                    { time: "14:00-17:00", activity: "手作體驗" },
                    { time: "18:00-19:00", activity: "晚餐" }
                ]
            },
            {
                day: 5,
                schedule: [
                    { time: "8:00-9:00", activity: "早餐" },
                    { time: "9:30-11:30", activity: "紀念品採購" },
                    { time: "12:00-13:00", activity: "午餐" },
                    { time: "13:30-15:30", activity: "返回集合點" }
                ]
            }
        ]
    }
];

// 預設領隊資料
const leaderInfo = {
    name: "冬瓜茶",
    contact: "0900000000",
    intro: "具有多年帶團經驗，熱愛旅遊與分享各地文化。"
};

// 預設登入帳號
const users = [
    { username: "leader1", password: "leader123", role: "leader" },
    { username: "Passion", password: "00000", role: "customer" } // 顧客預設
];
