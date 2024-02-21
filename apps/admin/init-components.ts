// 按需导入组件
import {
  darkTheme,
  NTag,
  NCard,
  NDivider,
  NSpace,
  NPopover,
  NButton,
  NAvatar,
  NStatistic,
  NSelect,
  NInput,
  NThing,
  NPopconfirm,
  NIcon,
  NIconWrapper,
  NCheckbox,
  NCheckboxGroup,
  NButtonGroup,
  NModal,
  NEmpty,
  NUpload,
  NUploadDragger,
  NSteps,
  NStep,
  NTabs,
  NTabPane,
  NGrid,
  NGridItem,
  NEllipsis,
  NImage,
  NMessageProvider,
  useMessage,
  NPagination,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NText,
  NConfigProvider,
  NDynamicTags,
  NColorPicker,
  NDescriptions,
  NDescriptionsItem,
  useNotification,
  NNotificationProvider,
  NSwitch,
  NMenu,
  // darkTheme,
  NBreadcrumb,
  NBreadcrumbItem,
  NLayout,
  NLayoutSider,
  NLayoutFooter,
  NLayoutContent,
  NLayoutHeader,
  NForm,
  NFormItem,
  NDropdown,
  NInputNumber,
  NTreeSelect,
  NBadge,
  NListItem,
  NList,
  NAutoComplete,
  NCascader,
  NDatePicker,
  NTimePicker,
  NRate,
  NSlider,
  NTransfer,
  NMention,
  NFormItemGi,
  NTree,
  NH1,
  NH2,
  NH3,
  NH4,
  NH5,
  NH6,
  NInputGroupLabel,
  NInputGroup,
  NDrawer,
  NDrawerContent,
  NDynamicInput,
  NPopselect,
  NTime,
  NScrollbar,
  NElement,
  NSkeleton,
  NTooltip,
  NTab,
  NResult,
  NAffix,
  NAlert,
  NGradientText,
  NPageHeader,
  NCollapse,
  NCollapseItem,
  NSpin,
  NWatermark,
  NDialog,
  NDialogProvider,
  useDialog,
} from 'naive-ui'
import {
  initVbenComponent,
  setNotice,
  setMessage,
  setDialog,
} from '@shoptop/designComponents'

export async function registerComponents(app) {
  initVbenComponent(app, {
    Affix: NAffix,
    Avatar: NAvatar,
    AutoComplete: NAutoComplete,
    Alert: NAlert,

    Badge: NBadge,
    Button: NButton,
    ButtonGroup: NButtonGroup,
    Breadcrumb: NBreadcrumb,
    BreadcrumbItem: NBreadcrumbItem,

    Card: NCard,
    Config: NConfigProvider,
    Checkbox: NCheckbox,
    CheckboxGroup: NCheckboxGroup,
    ColorPicker: NColorPicker,
    Cascader: NCascader,
    Collapse: NCollapse,
    CollapseItem: NCollapseItem,

    Drawer: NDrawer,
    Divider: NDivider,
    DrawerContent: NDrawerContent,
    DynamicTags: NDynamicTags,
    Descriptions: NDescriptions,
    DescriptionsItem: NDescriptionsItem,
    Dropdown: NDropdown,
    DynamicInput: NDynamicInput,
    DatePicker: NDatePicker,
    DarkTheme: darkTheme,

    Empty: NEmpty,
    Ellipsis: NEllipsis,
    Element: NElement,

    Form: NForm,
    FormItem: NFormItem,
    FormItemGi: NFormItemGi,

    Grid: NGrid,
    GridItem: NGridItem,
    GradientText: NGradientText,

    H1: NH1,
    H2: NH2,
    H3: NH3,
    H4: NH4,
    H5: NH5,
    H6: NH6,

    Input: NInput,
    InputGroup: NInputGroup,
    InputGroupLabel: NInputGroupLabel,
    InputNumber: NInputNumber,
    Icon: NIcon,
    Image: NImage,
    IconWrapper: NIconWrapper,

    ListItem: NListItem,
    List: NList,
    Layout: NLayout,
    LayoutHeader: NLayoutHeader,
    LayoutFooter: NLayoutFooter,
    LayoutSider: NLayoutSider,
    LayoutContent: NLayoutContent,

    Menu: NMenu,
    Modal: NModal,
    MessageProvider: NMessageProvider,
    Mention: NMention,

    NotificationProvider: NNotificationProvider,
    Dialog: NDialog,
    DialogProvider: NDialogProvider,

    Popover: NPopover,
    Popconfirm: NPopconfirm,
    PageHeader: NPageHeader,
    Pagination: NPagination,
    PopSelect: NPopselect,

    Rate: NRate,
    Radio: NRadio,
    RadioButton: NRadioButton,
    RadioGroup: NRadioGroup,
    Result: NResult,

    Space: NSpace,
    Spin: NSpin,
    Select: NSelect,
    Switch: NSwitch,
    Slider: NSlider,
    Skeleton: NSkeleton,
    Scrollbar: NScrollbar,
    Statistic: NStatistic,

    Steps: NSteps,
    Step: NStep,

    Tag: NTag,
    Tab: NTab,
    Tabs: NTabs,
    TabPane: NTabPane,
    Thing: NThing,
    Text: NText,
    Tree: NTree,
    Time: NTime,
    Tooltip: NTooltip,
    Transfer: NTransfer,
    TimePicker: NTimePicker,
    TreeSelect: NTreeSelect,

    Upload: NUpload,
    UploadDragger: NUploadDragger,

    Watermark: NWatermark,
  })
  setMessage(useMessage)
  setNotice(useNotification)
  setDialog(useDialog)
  // @ts-ignore
  // app.use(naive)
}
