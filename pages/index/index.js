//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    baseItems:[
      {
        item:'申请人姓名',
        value:'赖梓萌'
      },
      {
        item:'所在学院',
        value:'电气信息学院'
      },
      {
        item:'专业',
        value:'物联网工程'
      },
      {
        item:'学历',
        value:'本科'
      },
      {
        item:'学号',
        value:'2017052552'
      },
      {
        item:'个人手机号',
        value:'18127278888'
      },
      {
        item:'紧急联系人姓名',
        value:'杨雅涵'
      },
      {
        item:'紧急联系人电话',
        value:'13354971790'
      },
      {
        item:'辅导员',
        value:'李子昂'
      },
      {
        item:'所在校区',
        value:'珠海校区'
      }
    ],
    outItems:[
      {
        item:'外出事由类别',
        value:'医院就医'
      },
      {
        item:'外出事由简单描述',
        value:'因病需前往人民医院就医'
      }
    ],
    routeItems:[
      {
        item:'去程交通工具',
        value:'滴滴'
      },
      {
        item:'车次或车牌号',
        value:'无'
      },
      {
        item:'回程交通工具',
        value:'无'
      },
      {
        item:'车次或车牌',
        value:'无'
      },
      {
        item:'出门路线说明（请标注出入校门）',
        value:'珠海市人民医院'
      }
    ],
    commitItems:[
      {
        item:'承诺人',
        value:'赖梓萌'
      },
      {
        item:'申请日期',
        value:'2020-09-23'
      }
    ],
    historyItems:[
      {
        item:'审批步骤',
        value:'辅导员审批'
      },
      {
        item:'审批单位',
        value:'智能科学与工程学院/人工智能产业学院'
      },
      {
        item:'审批人',
        value:'李子昂'
      },
      {
        item:'审批意见',
        value:'辅导员李子昂已同意'
      },
      {
        item:'审批操作',
        value:'审核通过'
      },
      {
        item:'审批日期',
        value:'2020-09-22'
      },
      {
        item:'审批步骤',
        value:'学院领导审批'
      },
      {
        item:'审批单位',
        value:'智能科学与工程学院/人工智能产业学院'
      },
      {
        item:'审批人',
        value:'冯璐秀'
      },
      {
        item:'审批意见',
        value:'同意申报'
      },
      {
        item:'审批操作',
        value:'审核通过'
      },
      {
        item:'审批日期',
        value:'2020-09-22'
      },
      {
        item:'审批步骤',
        value:'学生处或校区审批'
      },
      {
        item:'审批单位',
        value:'学生处（学生工作部）'
      },
      {
        item:'审批人',
        value:'陈韶鹏'
      },
      {
        item:'审批意见',
        value:'同意'
      },
      {
        item:'审批操作',
        value:'审核通过'
      },
      {
        item:'审批日期',
        value:'2020-09-22'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
