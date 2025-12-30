// 测试 API 调用
const API_URL = 'https://linux.do/latest.json';

async function testAPI() {
  console.log('测试 Linux.do API...');
  
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    console.log('✅ API 调用成功');
    console.log('数据结构:', Object.keys(data));
    
    if (data.topic_list && data.topic_list.topics) {
      const topics = data.topic_list.topics;
      console.log(`✅ 获取到 ${topics.length} 个主题`);
      
      console.log('\n前3个主题:');
      topics.slice(0, 3).forEach((topic, index) => {
        console.log(`\n${index + 1}. ${topic.title}`);
        console.log(`   ID: ${topic.id}`);
        console.log(`   回复: ${topic.posts_count}, 浏览: ${topic.views}`);
      });
    }
  } catch (error) {
    console.error('❌ API 调用失败:', error);
  }
}

testAPI();
