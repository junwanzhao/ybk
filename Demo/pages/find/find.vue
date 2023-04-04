<template>
	<view>

		<!--导航栏-->
		<view class=" pb-1 bg-light position-relative top ">
			<text class="position-absolute h3 ml ">发现</text>
			<text class=" position-absolute  h4 mx-2 right-0 mt-1">帮助</text>
		</view>

		<!--主题内容  -->
		<view class="border-bottom my-5 mx-1">
			<view class="flex px-2 pt-2 mb-sm bg-white ">
				<view class="flex-1  pb-1">
					<image src="/static/images/ClassCircle.jpg" class="image-r"></image>
				</view>
				<view class="flex-4  py-1  ml-l">
					<text>课程圈</text>
				</view>
				<view class="flex-1 text-right  pt-1">
					<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
				</view>
			</view>
			<view class="flex px-2 pt-2 bg-white">
				<view class="flex-1  pb-1">
					<image src="/static/images/gongkaike.jpg" class="image-r"></image>
				</view>
				<view class="flex-4  py-1 ml-l ">
					<text>公开课</text>
				</view>
				<view class="flex-1 text-right  pt-1">
					<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
				</view>
			</view>

		</view>

		<view class="border-bottom mb-5 mx-1">
			<view class="flex px-2 pt-2  mb-sm bg-white ">
				<view class="flex-1  pb-1">
					<image src="/static/images/yunjiaocai.jpg" class="image-r"></image>
				</view>
				<view class="flex-4  py-1 ml-l">
					<text>云教材</text>
				</view>
				<view class="flex-1 text-right  pt-1">
					<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
				</view>
			</view>
			<view class="flex px-2 pt-2 bg-white">
				<view class="flex-1 pb-1">
					<image src="/static/images/shuxiang.jpg" class="image-r"></image>
				</view>
				<view class="flex-4  py-1 ml-l">
					<text>书香中国</text>
				</view>
				<view class="flex-1 text-right  pt-1">
					<text class="iconfont icon-right text-light-muted font-weight-bold"></text>
				</view>
			</view>

		</view>



		<!-- 底部导航栏 -->
		<view class="flex f-around bottom ">
			<view class="bottom-box">
				<image src="/static/images/index.png" class="bottom-img"></image>
				<view class="font-sm text-muted mt-1">班课</view>
			</view>
			<view class="bottom-box">
				<image src="/static/images//find-selected.png" class="bottom-img"></image>
				<view class="font-sm text-info mt-1">发现</view>
			</view>
			<view class="bottom-box">
				<image src="/static/images/my.png" class="bottom-img"></image>
				<view class="font-sm text-muted mt-1">我的</view>
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
	.bottom-img {
		height: 50rpx;
		width: 50rpx;
	}

	.bottom-box {
		padding-left: 44rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.bg {
		background-color: var(--bgColor);
		height: 100rpx;
	}

	.bottom {
		position: fixed;
		z-index: 1500;
		width: 100%;
		height: 120rpx;
		bottom: 0;
		background-color: white;
	}

	.ml {
		margin-left: 330rpx;
	}

	.top {
		width: 100%;
		height: 80rpx;
	}

	.image-r {
		width: 60rpx;
		height: 60rpx;
		// background-color: var(--info);
	}

	.mb-sm {
		margin-bottom: 1px;
	}

	.ml-l {
		margin-left: -38rpx;
	}
</style>