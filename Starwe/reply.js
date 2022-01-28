var ip;
var time = new Date();
var time_now = time.getTime();
var time_now_str = time_now.toString();
var time_now_str_len = time_now_str.length;
var time_now_str_len_half = time_now_str_len / 2;
var time_now_str_len_half_floor = Math.floor(time_now_str_len_half);
var time_now_str_len_half_ceil = Math.ceil(time_now_str_len_half);
var time_now_str_len_half_floor_str = time_now_str_len_half_floor.toString();
var time_now_str_len_half_ceil_str = time_now_str_len_half_ceil.toString();
var time_now_str_len_half_floor_str_len = time_now_str_len_half_floor_str.length;

var formattedBody = `**STARWEBAKETEC**\nWEB GETING FORM STARWEB:${location.href}&${time_now}${time_now_str_len_half_floor_str}${time_now_str_len_half_ceil_str}/${time_now_str_len_half_floor_str_len}`;
var mailToLink = "mailto:xchuangc@163.com?bcc=ysyeyu@gmail.com&subject=Star%20Web&body=" + encodeURIComponent(formattedBody);

