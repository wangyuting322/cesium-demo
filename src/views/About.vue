<script>
import * as Cesium from 'cesium'
// import 'cesium/Widgets/widgets.css'
Cesium.Ion.defauleAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YWM2MmM2YS0yMjJmLTQ0N2EtODRjMy0xNmNmYWIxZDA5ZjUiLCJpZCI6NTk4MTksImlhdCI6MTY0MjQ3Mzg5MH0.G5jTxPgotKJioNARUKI21iYxJEtmV8rK3BOM8Fve5CE'
const url = 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
export default {
  name: 'About',
  components: {

  },
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    initCesium () {
      const viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider: new Cesium.UrlTemplateImageryProvider({ url })
        // baseLayerPicker: false,
        // animation: false, // 是否显示动画控件
        // shouldAnimate: true,
        // homeButton: false, // 是否显示Home按钮
        // fullscreenButton: false, // 是否显示全屏按钮
        // baseLayerPicker: false, // 是否显示图层选择控件 要设为false,不然会报错 设置自定义影像时 这个参数要为false，否则不会生效
        // geocoder: true, // 是否显示地名查找控件
        // timeline: false, // 是否显示时间线控件
        // sceneModePicker: false, // 是否显示投影方式控件
        // navigationHelpButton: false, // 是否显示帮助信息控件
        // infoBox: true, // 是否显示点击要素之后显示的信息
        // requestRenderMode: false, // 启用请求渲染模式
        // scene3DOnly: false, // 每个几何实例将只能以3D渲染以节省GPU内存
        // sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
        // fullscreenElement: document.body // 全屏时渲染的HTML元素 暂时没发现用处
      })
      console.log(viewer)
      // 初始化位置-纽约
      // viewer.camera.setView({
      //   destination: new Cesium.Cartesian3(1332761.6877998516, -4662399.913291841, 4137888.8927274314),
      //   orientation: {
      //     heading: 0.6068261546578739, // east, default value is 0.0 (north)
      //     pitch: -0.6663290837739155, // default value (looking down)
      //     roll: 0.0 // default value
      //   }
      // })
      // // 去除版权信息
      // viewer._cesiumWidget._creditContainer.style.display = 'none'
      // // 加载kml文件
      // var kmlOptions = {
      //   camera: viewer.scene.camera,
      //   canvas: viewer.scene.canvas,
      //   clampToGround: true
      // }
      // // Load geocache points of interest from a KML file
      // // Data from : http://catalog.opendata.city/dataset/pediacities-nyc-neighborhoods/resource/91778048-3c58-449c-a3f9-365ed203e914
      // var geocachePromise = Cesium.KmlDataSource.load('./assets/SampleData/sampleGeocacheLocations.kml', kmlOptions)
      // // Add geocache billboard entities to scene and style them
      // geocachePromise.then(function (dataSource) {
      //   // Add the new data as entities to the viewer
      //   viewer.dataSources.add(dataSource)
      //   // Get the array of entities
      //   var geocacheEntities = dataSource.entities.values
      //   for (var i = 0; i < geocacheEntities.length; i++) {
      //     var entity = geocacheEntities[i]
      //     if (Cesium.defined(entity.billboard)) {
      //       // Entity styling code here
      //       // Adjust the vertical origin so pins sit on terrain
      //       entity.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM
      //       // Disable the labels to reduce clutter
      //       // entity.label = undefined;
      //       entity.label = {
      //         text: entity.name,
      //         showBackground: true,
      //         scale: 0.6,
      //         horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      //         verticalOrigin: Cesium.VerticalOrigin.TOP
      //         // distanceDisplayCondition : new Cesium.DistanceDisplayCondition(10.0, 8000.0)
      //       }
      //       // Add distance display condition
      //       entity.billboard.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(10.0, 20000.0)
      //       // Compute longitude and latitude in degrees
      //       var cartographicPosition = Cesium.Cartographic.fromCartesian(entity.position.getValue(Cesium.JulianDate.now()))
      //       var longitude = Cesium.Math.toDegrees(cartographicPosition.longitude)
      //       var latitude = Cesium.Math.toDegrees(cartographicPosition.latitude)
      //       // Modify description
      //       var description = '<table class="cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter"><tbody>' +
      //           '<tr><th>' + 'Longitude' + '</th><td>' + longitude.toFixed(5) + '</td></tr>' +
      //           '<tr><th>' + 'Latitude' + '</th><td>' + latitude.toFixed(5) + '</td></tr>' +
      //           '</tbody></table>'
      //       entity.description = description
      //     }
      //   }
      // })
    }
  },
  watch: {

  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.initCesium()
    })
  },
  beforeDestroy () {

  },
  render (h) {
    return (
      <div id="cesiumContainer"></div>
    )
  }
}
</script>
<style lang="scss" scoped>
#cesiumContainer{
  width: 90vw;
  height: 90vh;
}
</style>
