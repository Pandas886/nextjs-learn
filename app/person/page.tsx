import React from 'react';
import Head from 'next/head';
export default function PersonalPage() {
    // 这里使用您用于Gravatar的特定电子邮件地址
    const email = "example@example.com";
    const hash =""
    // const gravatarUrl = `https://www.gravatar.com/avatar/${hash}`;
    const gravatarUrl = 'https://gravatar.com/avatar/e7079555f28f0644be0fecfcd1e99131?size=256&cache=1710829261542';

    return (
        <div className="container">
            <Head>
                <title>个人介绍页面</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>

            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                {/* 头像信息部分 */}
                {/* 头像信息部分 */}
                <div className="mb-8 flex justify-center">
                    <img
                        className="rounded-full border-4 border-blue-300 h-32 w-32 object-cover shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                        src={gravatarUrl}
                        alt="个人头像"
                    />
                </div>
                {/* 个人信息部分 */}
                <div className="mb-8 border-b-4 border-blue-200 pb-4 space-y-4">
                    <h2 className="font-bold text-2xl mb-2 text-blue-700">个人信息</h2>
                    <p>性别：女</p>
                    <p>坐标：北京朝阳区</p>
                    <p>身高：168cm 体重：55kg</p>
                    <p>年龄：1999年10月</p>
                    <div>
                        <span className="inline-block bg-blue-300 text-blue-800 p-2 rounded-full">女</span>
                        <span className="inline-block bg-red-300 text-red-800 p-2 rounded-full ml-2">北京人</span>
                    </div>
                </div>

                {/* 教育职业信息部分 */}
                <div className="mb-8 border-b-4 border-blue-200 pb-4 space-y-4">
                    <h2 className="font-bold text-2xl mb-2 text-blue-700">学历/职业</h2>
                    <p>本科，新媒体编辑，税前年收入 13万左右（绩效浮动）</p>
                    <p>ps.在备考今年的事业编&公务员，如果成功上岸会有工作变动</p>
                    <div>
                        <span className="inline-block bg-green-300 text-green-800 p-2 rounded-full">本科</span>
                        <span className="inline-block bg-indigo-300 text-indigo-800 p-2 rounded-full ml-2">新媒体编辑</span>
                        <span className="inline-block bg-yellow-300 text-yellow-800 p-2 rounded-full ml-2">公务员考试中</span>
                    </div>
                </div>

                {/* 家庭情况部分 */}
                <div className="mb-8 border-b-4 border-blue-200 pb-4 space-y-4">
                    <h2 className="font-bold text-2xl mb-2 text-blue-700">家庭情况</h2>
                    <p>独生女，父母均已退休，收入稳定，家庭关系融洽</p>
                    <p>家中2套房（均在朝阳），父亲名下有牌有车，由于退休，这辆车日常都是我通勤开，我还在摇牌。家庭无贷款。</p>
                    <div>
                        <span className="inline-block bg-purple-300 text-purple-800 p-2 rounded-full">独生女</span>
                        <span className="inline-block bg-pink-300 text-pink-800 p-2 rounded-full ml-2">房产拥有</span>
                    </div>
                </div>

                {/* 日常和爱好部分 */}
                <div className="mb-8 border-b-4 border-blue-200 pb-4 space-y-4">
                    <h2 className="font-bold text-2xl mb-2 text-blue-700">日常</h2>
                    <p>不抽烟，会喝酒，基本是与同事、朋友出去聚餐/ktv桌游时喝，不去夜店不去酒吧，天气暖和时下班后会去健身房跑步</p>
                    <h2 className="font-bold text-2xl mb-2 text-blue-700">爱好</h2>
                    <p>摄影/游戏/电影/看livehouse</p>
                    <div>
                        <span className="inline-block bg-green-300 text-green-800 p-2 rounded-full">爱运动</span>
                        <span className="inline-block bg-yellow-300 text-yellow-800 p-2 rounded-full ml-2">喜欢摄影</span>
                        <span className="inline-block bg-red-300 text-red-800 p-2 rounded-full ml-2">爱好电影</span>
                    </div>
                </div>

                {/* 感情经历部分 */}
                <div className="mb-8 border-b-4 border-blue-200 pb-4 space-y-4">
                    <h2 className="font-bold text-2xl mb-2 text-blue-700">感情经历</h2>
                    <p>大学时谈过两段，均已断干净无联系方式，目前空窗期4年</p>
                    <div>
                        <span className="inline-block bg-blue-300 text-blue-800 p-2 rounded-full">空窗期4年</span>
                    </div>
                </div>

                {/* 其他信息部分 */}
                <div className="space-y-4">
                    <h2 className="font-bold text-2xl mb-2 text-blue-700">其他信息</h2>
                    <p>左肩有一处纹身（不大，且与前任无关)是钢铁侠，日常短袖完全可以遮住，只有穿吊带才会露出来。日后没有再增加纹身的想法。</p>
                    <div>
                        <span className="inline-block bg-red-300 text-red-800 p-2 rounded-full">钢铁侠纹身</span>
                    </div>
                </div>
            </div>
        </div>
    );
}