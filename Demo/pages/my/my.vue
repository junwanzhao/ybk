<template>
	<view>
		<!-- 自定义状态栏 -->
		<uni-status-bar></uni-status-bar>
	</view>

	<!--导航栏-->
	<view class=" pb-1 bg-light position-relative top ">
		<text class="position-absolute h3 ml ">我的</text>
		<text class=" position-absolute font-md mx-2 right-0 mt-3">帮助</text>
	</view>

	<!--头像姓名-->
	<view class="flex px-2 pt-2 mb-sm bg-white ">
		<view class="flex-1  pb-1">
			<image src="/static/images/touxiang.jpg" class="image-1"></image>
		</view>
		<view class="flex-4 font-name px-2 mb-5">
			<text>朱绘羽</text>
		</view>
		<view class="flex-1 text-right pt-5 mt-2">
			<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
		</view>
	</view>

	<!-- 属性值 -->
	<view class=" flex border-bottom border-top bg-white mb-5">
		<view class="box1 border-right py-1 px-1 font-weight-bold font ">
			<text class="text-info font-md">10</text>
			<view class="pt-1 text-light-muted ">
				经验值
			</view>
		</view>
		<view class=" box1 border-right py-1 px-1 font-weight-bold font">
			<text class="text-info font-md">0</text>
			<view class="pt-1 text-light-muted ">
				魅力值
			</view>
		</view>
		<view class=" box1 border-right py-1 px-1 font-weight-bold font">
			<text class="text-info font-md">0</text>
			<view class="pt-1 text-light-muted ">
				蓝豆
			</view>
		</view>
		<view class="box1 py-1 px-1 font-weight-bold font">
			<text class="text-info font-md">0</text>
			<view class="pt-1 text-light-muted ">
				心意
			</view>
		</view>
	</view>

	<!-- 卡片 -->
	<view class="f-around bg-white py-2 pl-1 border-bottom border-top mb-5 ">
		<view>
			<image src="/static/images/wdkj.jpg" class="image-2"></image>
			<view class="font-card ">我的空间</view>
		</view>
		<view>
			<image src="/static/images/wdsc.jpg" class="image-2"></image>
			<view class="font-card">我的收藏</view>
		</view>
		<view>
			<image src="/static/images/xykp.jpg" class="image-2"></image>
			<view class="font-card">心意卡片</view>
		</view>
		<view>
			<image src="/static/images/rwzx.jpg" class="image-2"></image>
			<view class="font-card">任务中心</view>
		</view>
		<view>
			<image src="/static/images/xtxx.jpg" class="image-2"></image>
			<view class="font-card">系统消息</view>
		</view>
	</view>

	<!-- 主体内容 -->
	<view>
		<view class="bg-white mb-5 px-2 py-2 flex f-between border-bottom border-top">
			<view class="flex-2 font-1 ">
				我的勋章
			</view>
			<view class=" flex-4 text-light-muted font-weight-bold text-right font-md">
				快来获得第一枚勋章
			</view>
			<view class="text-right pl-1 pt-1">
				<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
			</view>
		</view>

		<view class="bg-white px-2 py-2 flex f-between  border-top">
			<view class="flex-2 font-1 ">
				文件暂存区
			</view>
			<view class="text-right pl-1 pt-1">
				<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
			</view>
		</view>

		<view class="bg-white px-2 py-2 flex f-between border-top">
			<view class="flex-2 font-1 ">
				分享给朋友
			</view>
			<view class=" flex-4 text-light-muted font-weight-bold text-right font-md">
				累计分享成功0次
			</view>
			<view class="text-right pl-1 pt-1">
				<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
			</view>
		</view>
		<view class="bg-white px-2 py-2 flex f-between border-top">
			<view class="flex-2 font-1 ">
				用户协议
			</view>
			<view class="text-right pl-1 pt-1">
				<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
			</view>
		</view>
		<view class="bg-white px-2 py-2 flex f-between border-top">
			<view class="flex-2 font-1 ">
				隐私政策
			</view>
			<view class="text-right pl-1 pt-1">
				<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
			</view>
		</view>
		<view class="bg-white px-2 py-2 flex f-between border-bottom border-top">
			<view class="flex-2 font-1 ">
				设置
			</view>
			<view class="text-right pl-1 pt-1">
				<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
			</view>
		</view>
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
	.ml {
		margin-left: 330rpx;
	}

	.top {
		width: 100%;
		height: 80rpx;
	}

	.image-1 {
		width: 150rpx;
		height: 150rpx;
	}

	.mb-sm {
		margin-bottom: 1px;
	}

	.ml-l {
		margin-left: -38rpx;
	}

	.text-color0 {
		color: #424242;
		;
	}

	.color1 {
		background-color: yellow;
	}


	.box1 {
		height: 110rpx;
		width: 25%;
		display: block;
		text-align: center;
	}

	.image-2 {
		width: 100rpx;
		height: 100rpx;
		margin-left: 6rpx;
	}

	.font-name {
		font-size: 38rpx;
		font-weight: 510;
		color: #424242;
		padding-top: 60rpx;
	}

	.font-card {
		color: #424242;
		font-size: 28rpx;
		font-weight: 530;
	}

	.font-1 {
		color: #424242;
		font-size: 35rpx;
		font-weight: 510;
	}
</style>