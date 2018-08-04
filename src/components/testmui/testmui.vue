<template>
	<div>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">Home</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-email">
						<span class="mui-badge">5</span>
					</span>
					<div class="mui-media-body">Email</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">Chat</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">location</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">Search</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">Phone</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-gear"></span>
					<div class="mui-media-body">Setting</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-info"></span>
					<div class="mui-media-body">about</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-more"></span>
					<div class="mui-media-body">more</div>
				</a>
			</li>
		</ul>
		<button @click="clickMe">点击我呀</button>
	</div>
</template>

<script>

	// import mui from '@/statics/mui/js/mui.js'
export default {
  methods: {
    clickMe() {
      mui.alert("欢迎使用Hello MUI", "我来测试呀", function() {
        console.log("1111111111111")
      });
    }
  }
};
</script>

