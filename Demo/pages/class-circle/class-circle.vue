<template>
	<view>
		<!-- 	导航栏
		<view class=" pb-1 bg-light position-relative top ">
			<text class="position-absolute h3 ml ">蓝墨圈</text>
			<text class=" position-absolute font-md mx-2 right-0 mt-3">更多</text>
		</view> -->
		<!-- 搜索框 -->
		<view class="my-2 px-1 ">
			<view class="border search-box py-1">
				<text class="iconfont icon-search iconfont-box"></text>
				<input type="text" placeholder="搜索" class="font color03">
			</view>
		</view>

		<!-- 新手介绍 -->
		<view class=" bg-white py-2 px-1 border-bottom">
			<view class=" flex">
				<view class="flex-5 py-1">
					<image src="/static/images/ybk2.png" class="image-1"></image>
				</view>
				<view class="py-1 pr-2">
					<text class="iconfont icon-cha icon-1 font-weight-bold"></text>
				</view>
			</view>
			<view class="py-2">
				<text class="font-weight-bold color04 font-md">欢迎来到课程圈。如果你是新手，这里为你准备了一份简单的介绍。</text>
			</view>
			<view class="py-3 bg-1 rounded text-1">
				<text>去看看</text>
			</view>
		</view>

		<!-- 动态-->
		<!-- 清明 -->
		<view class="bg-white my-3 px-1 border-bottom py-1">
			<view class=" flex ">
				<view class="flex-1 py-1 ">
					<image src="/static/images/moke.jpg" class="image-1"></image>
				</view>
				<view class="flex-4 position-relative left-1">
					<text class="position-absolute mt-2">蓝墨</text>
					<view class="pt-2 mt-4 ">
						<text class="color03 font-sm">2023-04-05</text>
					</view>
				</view>
				<view class=" py-1 pr-2 ">
					<text class="iconfont icon-more icon-2 font-weight-bold"></text>
				</view>
			</view>
			<view class="py-1">
				<text class="font-weight-bold color04 font-md">看今朝， 俱新意， 忆往昔， 念故人。</text>
			</view>
			<image src="/static/images/qinming.jpg" class="image-2 pt-1"></image>
			<view class="border-bottom">
				<view class="bg-2 rounded px-1 my-2">
					<text class="color05 font">来自</text>
					<text class="text-white font"> 蓝墨圈(学)</text>
				</view>
			</view>
			<view class="f-around py-1">
				<view class="text-center">
					<view class="iconfont icon-shoucang text-dark"></view>
					<view class="font-sm text-muted mt-1 ">收藏(16)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-dianzan1 text-dark"></view>
					<view class="font-sm text-muted mt-1">点赞(28)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-pinglun text-dark"></view>
					<view class="font-sm text-muted mt-1">评论(3)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-ziyuan text-dark"></view>
					<view class="font-sm text-muted mt-1">打赏(0豆)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-yinyong text-dark"></view>
					<view class="font-sm text-muted mt-1">引用(0次)</view>
				</view>
			</view>
		</view>
		<!-- 除夕 -->
		<view class="bg-white my-3 px-1 border-bottom py-1">
			<view class=" flex ">
				<view class="flex-1 py-1 ">
					<image src="/static/images/moke.jpg" class="image-1"></image>
				</view>
				<view class="flex-4 position-relative left-1">
					<text class="position-absolute mt-2">蓝墨</text>
					<view class="pt-2 mt-4 ">
						<text class="color03 font-sm">2023-01-21</text>
					</view>
				</view>
				<view class=" py-1 pr-2 ">
					<text class="iconfont icon-more icon-2 font-weight-bold"></text>
				</view>
			</view>
			<view class="py-1">
				<text class="font-weight-bold color04 font-md">🎇祝愿家人皆团聚，今夜除夕阖家欢</text>
			</view>
			<image src="/static/images/chuxi.jpg" class="image-2 pt-1"></image>
			<view class="border-bottom">
				<view class="bg-2 rounded px-1 my-2">
					<text class="color05 font">来自</text>
					<text class="text-white font"> 蓝墨圈(学)</text>
				</view>
			</view>
			<view class="f-around py-1">
				<view class="text-center">
					<view class="iconfont icon-shoucang text-dark"></view>
					<view class="font-sm text-muted mt-1 ">收藏(139)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-dianzan1 text-dark"></view>
					<view class="font-sm text-muted mt-1">点赞(221)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-pinglun text-dark"></view>
					<view class="font-sm text-muted mt-1">评论(25)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-ziyuan text-dark"></view>
					<view class="font-sm text-muted mt-1">打赏(1豆)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-yinyong text-dark"></view>
					<view class="font-sm text-muted mt-1">引用(0次)</view>
				</view>
			</view>
		</view>
		<!-- 元旦 -->
		<view class="bg-white my-3 px-1 border-bottom py-1">
			<view class=" flex ">
				<view class="flex-1 py-1 ">
					<image src="/static/images/moke.jpg" class="image-1"></image>
				</view>
				<view class="flex-4 position-relative left-1">
					<text class="position-absolute mt-2">蓝墨</text>
					<view class="pt-2 mt-4 ">
						<text class="color03 font-sm">2023-01-01</text>
					</view>
				</view>
				<view class=" py-1 pr-2 ">
					<text class="iconfont icon-more icon-2 font-weight-bold"></text>
				</view>
			</view>
			<view class="py-1">
				<text class="font-weight-bold color04 font-md">🎊新的一年好运爆棚，💥愿望通通实现。</text>
			</view>
			<image src="/static/images/yuandan.jpg" class="image-2 pt-1"></image>
			<view class="border-bottom">
				<view class="bg-2 rounded px-1 my-2">
					<text class="color05 font">来自</text>
					<text class="text-white font"> 蓝墨圈(学)</text>
				</view>
			</view>
			<view class="f-around py-1">
				<view class="text-center">
					<view class="iconfont icon-shoucang text-dark"></view>
					<view class="font-sm text-muted mt-1 ">收藏(16)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-dianzan1 text-dark"></view>
					<view class="font-sm text-muted mt-1">点赞(35)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-pinglun text-dark"></view>
					<view class="font-sm text-muted mt-1">评论(9)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-ziyuan text-dark"></view>
					<view class="font-sm text-muted mt-1">打赏(3豆)</view>
				</view>
				<view class="text-center">
					<view class="iconfont icon-yinyong text-dark"></view>
					<view class="font-sm text-muted mt-1">引用(0次)</view>
				</view>
			</view>
		</view>
	
	<!-- 添加 -->
	<image src="/static/images/jiahao2.png" class="image-3"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.color01 {
		background-color: #ffff00;
	}

	.color02 {
		background-color: #61a8ff;
	}

	.color03 {
		color: var(--lightMuted);
	}

	.color04 {
		color: #5c5c5c;
	}

	.color05 {
		color: #a2a2a2;
	}

	.iconfont-box {
		float: left;
		color: var(--lightMuted);
		font-size: 35rpx;
	}

	.search-box {
		background-color: #ececec;
	}

	.image-1 {
		width: 85rpx;
		height: 85rpx;
		float: left;
	}

	.image-2 {
		width: 300rpx;
		height: 580rpx;
	}
	.image-3{
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		bottom: 10rpx;
		z-index: 1000;
		background-color: white;
		border-radius: 50%;
		right: 10rpx;
	}

	.icon-1 {
		color: var(--lightMuted);
		font-size: 20rpx;
	}

	.icon-2 {
		color: var(--lightMuted);
		font-size: 50rpx;
	}

	.bg-1 {
		background-color: #2bd2eb;
	}

	.bg-2 {
		background-color: #c1c1c1;
		width: 220rpx;
	}

	.text-1 {
		color: var(--white);
		text-align: center;
		font-size: 35rpx;
	}

	.left-1 {
		left: -20rpx;
	}

	.left-2 {
		left: -5rpx;
	}
</style>