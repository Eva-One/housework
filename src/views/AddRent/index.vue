<template>
  <div>
    <van-nav-bar
      title="发布房源"
      left-arrow
      @click-left="onClickLeft"
      class="mybar"
    />
    <van-cell-group>
      <van-cell title="房源信息" />
      <van-cell
        title="小区名称"
        is-link
        :value="communityName || '请输入小区名称'"
        @click="isPopShowX = true"
      />
      <van-popup
        v-model="isPopShowX"
        :style="{ height: '100%', width: '100%' }"
        position="bottom"
      >
        <house-search
          @search="getHouse"
          :list="searchRes"
          @chooseCommunity="(communityName = $event), (isPopShowX = false)"
        ></house-search>
      </van-popup>

      <van-field
        v-model="rentMoney"
        type="number"
        label="租金"
        placeholder="请输入租金/月"
      >
        <template #extra>
          <span class="diycontent">¥/月</span>
        </template>
      </van-field>
      <van-field
        v-model="rentArea"
        type="number"
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #extra>
          <span class="diycontent">㎡</span>
        </template>
      </van-field>

      <van-cell
        title="户型"
        is-link
        :value="houseType || '请选择'"
        @click="isPopShowH = true"
      />
      <van-popup
        v-model="isPopShowH"
        :style="{ height: '40%', width: '100%' }"
        position="bottom"
      >
        <house-type :columns="houseTypeList"></house-type>
      </van-popup>

      <van-cell
        title="所在楼层"
        is-link
        :value="houseFloor || '请选择'"
        @click="isPopShowL = true"
      />
      <van-popup
        v-model="isPopShowL"
        :style="{ height: '40%', width: '100%' }"
        position="bottom"
      >
        <house-floor :columns="houseFloorList"></house-floor>
      </van-popup>

      <van-cell
        title="朝向"
        is-link
        :value="houseTo || '请选择'"
        @click="isPopShowC = true"
      />
      <van-popup
        v-model="isPopShowC"
        :style="{ height: '40%', width: '100%' }"
        position="bottom"
      >
        <house-to :columns="houseToList"></house-to>
      </van-popup>

      <van-cell title="房屋标题" />
      <van-field
        v-model="houseTitle"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
      />

      <van-cell title="房屋图像" />
      <van-field name="uploader">
        <template #input>
          <van-uploader v-model="houseImg" :after-read="uploadImg" multiple />
        </template>
      </van-field>

      <van-cell title="房屋配置" />
      <van-grid :column-num="5" :border="false">
        <van-grid-item
          :text="item.name"
          v-for="(item, index) in support"
          :key="index"
          @click="chooseSupport(item.name)"
        >
          <template #icon>
            <span :class="item.icon"></span>
          </template>
        </van-grid-item>
      </van-grid>

      <van-cell title="房屋描述" />
      <van-field
        v-model="houseText"
        rows="6"
        autosize
        type="textarea"
        placeholder="请输入房屋描述信息"
      />
    </van-cell-group>
    <van-row class="mybtn">
      <van-col span="12">
        <van-button type="default">取消</van-button>
      </van-col>
      <van-col span="12">
        <van-button type="primary">提交</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import HouseFloor from "./components/HouseFloor.vue";
import HouseType from "./components/HouseType.vue";
import HouseTo from "./components/HouseTo.vue";
import HouseSearch from "./components/HouseSearch.vue";
import {
  requestRentHouseParamsApi,
  requestSearchHouseApi,
  requestUploadImgApi,
} from "@/api";
export default {
  name: "AddRent",
  data() {
    return {
      rentMoney: "", //房屋租金，上传需要的
      rentArea: "", //房屋面积，上传需要的
      isPopShowH: false,
      isPopShowL: false,
      isPopShowC: false,
      isPopShowX: false,
      houseTypeList: [],
      houseType: "",
      houseTypeCode: "", //房屋类型，上传需要的
      houseFloorList: [],
      houseFloor: "",
      houseFloorCode: "", //房屋楼层，上传需要的
      houseToList: [],
      houseTo: "",
      houseToCode: "", //房屋朝向，上传需要的
      houseTitle: "", //房屋标题，上传需要的
      houseImg: [],
      uploadImgs: [], //房屋图片，上传需要的
      houseText: "", //房屋描述，上传需要的
      searchRes: [],
      communityName: "", //小区名称，上传需要的
      supportList: [], //房屋配置，上传需要的
      support: [
        {
          name: "洗衣机",
          icon: "iconfont icon-xiyiji",
        },
        {
          name: "电视",
          icon: "iconfont icon-dianshiji",
        },
        {
          name: "天然气",
          icon: "iconfont icon-meiqitianranqi",
        },
        {
          name: "冰箱",
          icon: "iconfont icon-bingxiang",
        },
        {
          name: "暖气",
          icon: "iconfont icon-nuanqi",
        },
        {
          name: "宽带",
          icon: "iconfont icon-kuandai",
        },
        {
          name: "空调",
          icon: "iconfont icon-kongtiao",
        },
        {
          name: "沙发",
          icon: "iconfont icon-shafa",
        },
        {
          name: "热水器",
          icon: "iconfont icon-reshuiqi",
        },
        {
          name: "衣柜",
          icon: "iconfont icon-yigui",
        },
      ],
    };
  },
  components: {
    HouseFloor,
    HouseType,
    HouseTo,
    HouseSearch,
  },
  async created() {
    await this.getRentParams();
  },
  methods: {
    async getRentParams() {
      const { data } = await requestRentHouseParamsApi(
        this.$store.state.tokenObj.token
      );
      console.log(data);
      this.houseTypeList = data.body.roomType;
      this.houseFloorList = data.body.floor;
      this.houseToList = data.body.oriented;
    },
    onClickLeft() {
      this.$router.back();
    },
    async getHouse(key) {
      const { data } = await requestSearchHouseApi(
        key,
        this.$store.state.currentCity.value
      );
      this.searchRes = data.body;
    },
    async uploadImg(file) {
      try {
        const formdata = new FormData();
        formdata.append("file", file.file);
        const { data } = await requestUploadImgApi(formdata);
        this.uploadImgs.push(data.body[0]);
      } catch (e) {
        this.$toast.fail("上传图片失败");
      }
    },
    chooseSupport(name) {
      this.supportList.push(name);
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #21b97a;
}

:deep(.mybar .van-icon) {
  color: #fff;
}

:deep(.van-nav-bar__title) {
  color: white;
  font-size: 0.48rem;
  font-weight: normal;
}
.diycontent {
  color: #888;
}

:deep(.iconfont) {
  font-size: 28px;
}
.mybtn {
  position: sticky;
  bottom: 0;
  left: 0;
}
:deep(.mybtn .van-button) {
  width: 100%;
}
</style>
