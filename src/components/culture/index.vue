<template>
  <div>
     	<mt-button type="default" @click="_login()">default1</mt-button>
     	<mt-button type="default"  @click="_logins()">default2</mt-button>
  </div>
</template>
<script>
export default {
	methods:{
		_login(){
			var data={
				 mobile:"15800000000",
       			 password:"000000"
			}
			this.$api.logon(data).then(res=>{
				console.log(res);
			}).catch(e => {
  			
  			});
		},
		_logins(){
			var data={
				 mobile:"15800000000",
       			 password:"000000"
			}
			this.$api.logons(data).then(res=>{
				console.log(res);
			});
		}
	}
}
</script>

