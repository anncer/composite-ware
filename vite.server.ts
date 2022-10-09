export const ProxyTarget = "http://10.28.89.11"
export const DmppProxyTarget = "http://11.11.141.49:3001"

export default {
    // 服务配置
    host: "0.0.0.0",
    port: 5000, // 类型： number 指定服务器端口;
    cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    proxy: {
      '/api': {
        target: ProxyTarget,
        changeOrigin: true
      },
      '/api/admin': {
        target: ProxyTarget,
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/admin', '')
      },
      '/dmpp/api': {
        target: DmppProxyTarget,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/dmpp/api', '/api')
      },
    }
  }
