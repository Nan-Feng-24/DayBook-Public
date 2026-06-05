    const STORAGE_KEY = "daily-note-tasks-v2";
    const SETTINGS_KEY = "daily-note-settings-v1";
    const QUOTE_KEY = "daily-note-quotes-v1";
    const QUOTE_LIBRARY_KEY = "daily-note-quote-library-v1";
    const QUOTE_STATE_VERSION = 3;
    const QUOTE_LIBRARY_VERSION = 1;
    const REVIEW_KEY = "daily-note-reviews-v1";
    const SNAPSHOT_KEY = "daily-note-snapshots-v1";
    const SNAPSHOT_LIMIT = 5;
    const LEGACY_STORAGE_KEY = "daily-note-tasks";
    const ANNOUNCEMENT_VERSION = "0.1.11";
    const ANNOUNCEMENT_ID = "0.1.11-patch-20260531-announcement-panel";
    const ANNOUNCEMENT_READ_KEY = "daily-note-announcement-read-v2";
    const ANNOUNCEMENT_DEFAULT_TAB_KEY = "daily-note-announcement-default-tab-v1";
    const ANNOUNCEMENT_PATCH = {
      id: ANNOUNCEMENT_ID,
      title: "0.1.11 当前补丁更新",
      summary: "这次补丁把公告入口重构为补丁类 / 消息类双通道，并补齐了补丁类公告内容，避免用户点开后看到空状态。",
      items: [
        "公告面板改成单入口双通道结构，进入后可在“补丁类 / 消息类”之间切换查看。",
        "补丁类公告现在直接展示最近一次补丁的具体内容，不再和消息公告混在一起。",
        "消息类公告改成胶囊列表，默认展示最近 3 条，点击单条后可查看详细内容。",
        "在公告面板标题旁加入设置入口，允许用户决定“全部已读后默认先打开补丁类还是消息类”。",
        "公告入口未读状态现在会综合补丁类和消息类，避免有新内容时被静默埋掉。"
      ]
    };
    const ANNOUNCEMENT_MESSAGES = [
      {
        id: "message-2026-05-31-panel-structure",
        title: "公告面板结构调整说明",
        time: "刚刚",
        body: [
          "公告入口现在只保留一个，但面板内部会分成“补丁类”和“消息类”两个通道。",
          "补丁类更适合看最近一次改了什么；消息类更适合看提醒、通知或说明类内容。",
          "如果后面还有新的消息公告，会按时间向下顶，旧消息不会被补丁类内容覆盖掉。"
        ]
      },
      {
        id: "message-2026-05-31-default-tab",
        title: "全部已读后的默认打开方式已支持设置",
        time: "今天",
        body: [
          "当补丁类和消息类都没有未读内容时，用户可以自己决定点击公告后默认先进入哪个通道。",
          "这个设置只影响“全部已读”的情况；一旦有未读内容，系统仍然会优先按未读规则决定落在哪一栏。"
        ]
      },
      {
        id: "message-2026-05-30-entry-rule",
        title: "公告入口的提醒规则已收敛",
        time: "昨天",
        body: [
          "补丁类有新内容时，公告入口会优先按补丁类提醒。",
          "只有消息类有新内容时，公告入口才会优先按消息类提醒。",
          "这样可以减少同一个入口承担太多语义时带来的混乱感。"
        ]
      },
      {
        id: "message-2026-05-29-backup-tip",
        title: "使用提醒：重要内容仍建议定期导出备份",
        time: "2 天前",
        body: [
          "公告结构已经调整，但数据仍然保存在当前浏览器里。",
          "如果你的内容比较重要，仍然建议定期使用“导出备份”保留一份快照。"
        ]
      }
    ];
    const todayKey = formatDateKey(new Date());
    const defaultMonthKey = todayKey.slice(0, 7);
    const DEFAULT_QUOTES = {
      daily: [
        "先把今天最重要的一件事做好，剩下的路会自己亮起来。",
        "不用一下子把所有事做完，认真完成眼前这一件就很好。",
        "今天的节奏不必很满，只要一步一步在往前走。",
        "哪怕只前进一步，也是在认真照顾今天的生活。",
        "把心放稳一点，今天的计划会慢慢变成结果。",
        "写下要做的事，本身就是在替自己整理力量。",
        "能把今天过扎实，明天就会少一点慌张。",
        "先开始，事情就已经比停在心里更清晰了。",
        "小小地完成一件事，也是在给自己攒底气。",
        "别急着追求很多，先把手上的这一点做好。",
        "今日事今日清，心里就会多一分轻快。",
        "认真对待普通的一天，生活也会认真回应你。",
        "把注意力收回来，先做好此刻能做的事。",
        "你不需要一下子变厉害，只需要今天比昨天更稳一点。",
        "再小的进步，只要是真的向前，都值得算数。",
        "做完一件具体的小事，比想很多更能安定人心。",
        "给今天留一点秩序，日子就会多一点从容。",
        "完成，比犹豫更能带来力量。",
        "不和一天较劲，只和拖延较劲。",
        "每一次按时完成，都是在慢慢建立对自己的信任。",
        "先把心安顿好，效率才会慢慢回来。",
        "别怕开始得慢，怕的是一直没有开始。",
        "你今天做的每一点，都会替明天减轻一点负担。",
        "把大事拆成小步，脚下就不会那么重。",
        "不必等状态完美，先动起来，状态会跟上。",
        "把今天过清楚，比把未来想复杂更重要。",
        "今日的认真，都会变成以后可依靠的自己。",
        "先处理最难的一件，后面的事会顺很多。",
        "允许自己普通，但别放弃认真。",
        "你写下的每个待办，都是和生活重新握手。",
        "今天能完成七分，也比迟迟不动更有价值。",
        "稳定地做，往往比用力地想更有效。",
        "把事情往前推一点，心里的雾就会散一点。",
        "先做眼前事，先救眼前心。",
        "今天不一定要很厉害，但要尽量不敷衍自己。",
        "每一次不逃避，都是在练习变强。",
        "比起自责，行动更能解决问题。",
        "把该做的做好，情绪也会慢慢站回原位。",
        "今天的每个小完成，都会积成明天的松弛感。",
        "肯把今天过好的人，运气通常也不会太差。"
      ],
      monthly: [
        "月度安排不求一下完成，只求每周都往前推进一点。",
        "长期的事靠的不是冲刺，而是持续把它放在心上。",
        "给这个月一点耐心，很多成长本来就需要时间。",
        "把目标拆小，日子就会更有把握地往前走。",
        "这个月想完成的事，不必急，稳定推进就已经很好。",
        "慢一点没关系，只要这个月的方向没有偏。",
        "一个月真正拉开差距的，往往不是爆发，而是坚持。",
        "把想做的事放进安排里，愿望才会慢慢长出结果。",
        "不是每周都要惊艳，但每周都该留下推进的痕迹。",
        "这个月最重要的，不是做很多，而是不轻易中断。",
        "把长期目标放低一点门槛，执行起来反而更有力量。",
        "与其等一个完整的空档，不如先守住稳定的节奏。",
        "月度计划不是束缚自己，而是提醒自己别偏航。",
        "允许过程有起伏，但别让方向轻易丢掉。",
        "能反复做下去的计划，才是真正适合自己的计划。",
        "一个月结束时最好的答案，是你确实比月初更靠近目标。",
        "把焦虑变成拆解，把拆解变成行动。",
        "先把这个月过明白，很多远方自然会靠近。",
        "比起一时很猛，更重要的是整个月都没有放弃。",
        "每个平稳推进的月份，都会在未来悄悄算作你的积累。",
        "真正有分量的变化，常常来自一个月一个月地不松手。",
        "月度目标不是为了压迫自己，而是为了提醒自己持续靠近。",
        "这个月少一点内耗，多一点落实，结果就会不一样。",
        "把每周都过成有效的一周，这个月自然不会差。"
      ]
    };
    const DEFAULT_TASKS = [
      {
        id: createTaskId(),
        text: "写日记",
        done: false,
        type: "daily",
        dateKey: todayKey,
        deadline: setTimeForDate(todayKey, 21, 0),
        createdAt: new Date().toISOString(),
        completedAt: ""
      },
      {
        id: createTaskId(),
        text: "运动15分钟",
        done: false,
        type: "daily",
        dateKey: todayKey,
        deadline: setTimeForDate(todayKey, 20, 0),
        createdAt: new Date().toISOString(),
        completedAt: ""
      },
      {
        id: createTaskId(),
        text: "阅读30分钟",
        done: false,
        type: "monthly",
        dateKey: defaultMonthKey,
        deadline: `${defaultMonthKey}-28T21:30`,
        createdAt: new Date().toISOString(),
        completedAt: ""
      }
    ];

    const state = {
      currentView: "daily",
      selectedDateKey: todayKey,
      calendarMonth: startOfMonth(new Date()),
      monthViewDate: startOfMonth(new Date())
    };

    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const deadlineLabel = document.getElementById("deadlineLabel");
    const composerHint = document.getElementById("composerHint");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const pendingCount = document.getElementById("pendingCount");
    const completedCount = document.getElementById("completedCount");
    const totalCount = document.getElementById("totalCount");
    const attentionCount = document.getElementById("attentionCount");
    const warningHoursInput = document.getElementById("warningHoursInput");
    const dangerHoursInput = document.getElementById("dangerHoursInput");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");
    const deleteAllBtn = document.getElementById("deleteAllBtn");
    const exportBtn = document.getElementById("exportBtn");
    const importBtn = document.getElementById("importBtn");
    const restoreSnapshotBtn = document.getElementById("restoreSnapshotBtn");
    const importFileInput = document.getElementById("importFileInput");
    const currentDate = document.getElementById("currentDate");
    const focusSummary = document.getElementById("focusSummary");
    const versionInfoTrigger = document.getElementById("versionInfoTrigger");
    const versionInfoModal = document.getElementById("versionInfoModal");
    const versionInfoBackdrop = document.getElementById("versionInfoBackdrop");
    const versionInfoCloseBtn = document.getElementById("versionInfoCloseBtn");
    const versionInfoDismissBtn = document.getElementById("versionInfoDismissBtn");
    const announcementTrigger = document.getElementById("announcementTrigger");
    const announcementModal = document.getElementById("announcementModal");
    const announcementBackdrop = document.getElementById("announcementBackdrop");
    const announcementCloseBtn = document.getElementById("announcementCloseBtn");
    const announcementDismissBtn = document.getElementById("announcementDismissBtn");
    const announcementMarkReadBtn = document.getElementById("announcementMarkReadBtn");
    const announcementSettingsBtn = document.getElementById("announcementSettingsBtn");
    const announcementSettingsPanel = document.getElementById("announcementSettingsPanel");
    const announcementDefaultPatchBtn = document.getElementById("announcementDefaultPatchBtn");
    const announcementDefaultMessagesBtn = document.getElementById("announcementDefaultMessagesBtn");
    const announcementTabPatch = document.getElementById("announcementTabPatch");
    const announcementTabPatchDot = document.getElementById("announcementTabPatchDot");
    const announcementTabMessages = document.getElementById("announcementTabMessages");
    const announcementTabMessagesCount = document.getElementById("announcementTabMessagesCount");
    const announcementPatchPanel = document.getElementById("announcementPatchPanel");
    const announcementPatchTitle = document.getElementById("announcementPatchTitle");
    const announcementPatchSummary = document.getElementById("announcementPatchSummary");
    const announcementPatchList = document.getElementById("announcementPatchList");
    const announcementPatchEmpty = document.getElementById("announcementPatchEmpty");
    const announcementMessagesPanel = document.getElementById("announcementMessagesPanel");
    const announcementMessagesList = document.getElementById("announcementMessagesList");
    const announcementMessagesMoreBtn = document.getElementById("announcementMessagesMoreBtn");
    const announcementMessageEmpty = document.getElementById("announcementMessageEmpty");
    const announcementMessageDetailOverlay = document.getElementById("announcementMessageDetailOverlay");
    const announcementDetailKicker = document.getElementById("announcementDetailKicker");
    const announcementMessageDetailTitle = document.getElementById("announcementMessageDetailTitle");
    const announcementMessageDetailMeta = document.getElementById("announcementMessageDetailMeta");
    const announcementMessageDetailBody = document.getElementById("announcementMessageDetailBody");
    const announcementMessageDetailCloseBtn = document.getElementById("announcementMessageDetailCloseBtn");
    const announcementMessageDetailBackBtn = document.getElementById("announcementMessageDetailBackBtn");
    const announcementMessageDetailMarkReadBtn = document.getElementById("announcementMessageDetailMarkReadBtn");
    const installCard = document.getElementById("installCard");
    const installNote = document.getElementById("installNote");
    const installAppBtn = document.getElementById("installAppBtn");
    const installHelpBtn = document.getElementById("installHelpBtn");
    const manualDock = document.getElementById("manualDock");
    const manualCloseBtn = document.getElementById("manualCloseBtn");
    const manualNav = document.getElementById("manualNav");
    const manualContent = document.getElementById("manualContent");
    const quoteKicker = document.getElementById("quoteKicker");
    const quoteText = document.getElementById("quoteText");
    const quoteNote = document.getElementById("quoteNote");
    const refreshQuoteBtn = document.getElementById("refreshQuoteBtn");
    const editQuoteBtn = document.getElementById("editQuoteBtn");
    const saveQuoteBtn = document.getElementById("saveQuoteBtn");
    const hideQuoteBtn = document.getElementById("hideQuoteBtn");
    const manageQuoteBtn = document.getElementById("manageQuoteBtn");
    const dailyView = document.getElementById("dailyView");
    const monthlyView = document.getElementById("monthlyView");
    const dailyTabBtn = document.getElementById("dailyTabBtn");
    const monthlyTabBtn = document.getElementById("monthlyTabBtn");
    const prevMonthBtn = document.getElementById("prevMonthBtn");
    const nextMonthBtn = document.getElementById("nextMonthBtn");
    const calendarTitle = document.getElementById("calendarTitle");
    const calendarGrid = document.getElementById("calendarGrid");
    const monthViewTitle = document.getElementById("monthViewTitle");
    const prevOverviewMonthBtn = document.getElementById("prevOverviewMonthBtn");
    const nextOverviewMonthBtn = document.getElementById("nextOverviewMonthBtn");
    const monthlyTaskInput = document.getElementById("monthlyTaskInput");
    const monthlyComposerHint = document.getElementById("monthlyComposerHint");
    const monthlyDeadlineInput = document.getElementById("monthlyDeadlineInput");
    const monthlyAddTaskBtn = document.getElementById("monthlyAddTaskBtn");
    const monthlySpanEndInput = document.getElementById("monthlySpanEndInput");
    const monthlyTotalCount = document.getElementById("monthlyTotalCount");
    const monthlyPendingCount = document.getElementById("monthlyPendingCount");
    const monthlyCompletedCount = document.getElementById("monthlyCompletedCount");
    const monthlyAttentionCount = document.getElementById("monthlyAttentionCount");
    const monthlyTaskList = document.getElementById("monthlyTaskList");
    const monthlyClearCompletedBtn = document.getElementById("monthlyClearCompletedBtn");
    const monthlyDeleteAllBtn = document.getElementById("monthlyDeleteAllBtn");
    const dailyReviewScope = document.getElementById("dailyReviewScope");
    const dailyReviewInput = document.getElementById("dailyReviewInput");
    const dailyReviewMeta = document.getElementById("dailyReviewMeta");
    const saveDailyReviewBtn = document.getElementById("saveDailyReviewBtn");
    const clearDailyReviewBtn = document.getElementById("clearDailyReviewBtn");
    const monthlyReviewScope = document.getElementById("monthlyReviewScope");
    const monthlyReviewInput = document.getElementById("monthlyReviewInput");
    const monthlyReviewMeta = document.getElementById("monthlyReviewMeta");
    const saveMonthlyReviewBtn = document.getElementById("saveMonthlyReviewBtn");
    const clearMonthlyReviewBtn = document.getElementById("clearMonthlyReviewBtn");
    const timelineDate = document.getElementById("timelineDate");
    const timelineList = document.getElementById("timelineList");
    const MANUAL_DEFAULT_SECTION = "manual-overview";
    const MANUAL_SECTION_IDS = [
      "manual-overview",
      "manual-open",
      "manual-structure",
      "manual-update",
      "manual-daily",
      "manual-monthly",
      "manual-calendar-timeline",
      "manual-review",
      "manual-quote",
      "manual-backup",
      "manual-install",
      "manual-storage",
      "manual-tips",
      "manual-faq"
    ];
    const MANUAL_SECTION_LINKS = [
      { selector: "#installHelpBtn, #installAppBtn, #installCard", sectionId: "manual-install" },
      { selector: "#announcementTrigger, #versionInfoTrigger", sectionId: "manual-update" },
      { selector: "#dailyView .review-panel, #monthlyView .review-panel", sectionId: "manual-review" },
      { selector: ".timeline-panel, .calendar-card", sectionId: "manual-calendar-timeline" },
      { selector: "#dailyView .composer, #dailyView .settings-panel, #dailyView .task-panel", sectionId: "manual-daily" },
      { selector: "#monthlyView .composer, #monthlyView .month-card, #monthlyView .task-panel", sectionId: "manual-monthly" },
      { selector: ".quote-card, .visual-card, .hero-band", sectionId: "manual-quote" },
      { selector: ".backup-actions", sectionId: "manual-backup" }
    ];
    let tasks = loadTasks();
    let settings = loadSettings();
    let quoteLibrary = loadQuoteLibrary();
    let quoteState = loadQuoteState();
    let reviews = loadReviews();
    let deferredInstallPrompt = null;
    let announcementReadState = loadAnnouncementReadState();
    let announcementDefaultTab = loadAnnouncementDefaultTab();
    let activeAnnouncementTab = "patch";
    let selectedAnnouncementMessageId = getFirstAnnouncementMessageId();
    let announcementShowAllMessages = false;
    let isAnnouncementSettingsOpen = false;
    let manualToggleBtn = null;
    let activeManualSectionId = MANUAL_DEFAULT_SECTION;

    renderDate();
    updateDeadlineField();
    syncSettingsInputs();
    renderAll();
    renderAnnouncementTrigger();
    refreshDateAtMidnight();
    initInstallSupport();
    initAnnouncementSupport();
    initManualSupport();

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });
    monthlyAddTaskBtn.addEventListener("click", addMonthlyTask);
    monthlyTaskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addMonthlyTask();
      }
    });

    dailyTabBtn.addEventListener("click", () => switchView("daily"));
    monthlyTabBtn.addEventListener("click", () => switchView("monthly"));

    prevMonthBtn.addEventListener("click", () => {
      state.calendarMonth = shiftMonth(state.calendarMonth, -1);
      renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
      state.calendarMonth = shiftMonth(state.calendarMonth, 1);
      renderCalendar();
    });

    prevOverviewMonthBtn.addEventListener("click", () => {
      state.monthViewDate = shiftMonth(state.monthViewDate, -1);
      monthlyDeadlineInput.value = "";
      monthlySpanEndInput.value = "";
      renderAll();
    });

    nextOverviewMonthBtn.addEventListener("click", () => {
      state.monthViewDate = shiftMonth(state.monthViewDate, 1);
      monthlyDeadlineInput.value = "";
      monthlySpanEndInput.value = "";
      renderAll();
    });

    calendarGrid.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-date]");
      if (!button) {
        return;
      }
      state.selectedDateKey = button.dataset.date;
      state.calendarMonth = startOfMonth(parseDateKey(state.selectedDateKey));
      syncDefaultDeadline(true);
      renderAll();
    });

    taskList.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) {
        return;
      }

      const { id, action } = button.dataset;
      if (action === "edit") {
        editTask(id);
      } else if (action === "delete") {
        deleteTask(id);
      }
    });

    taskList.addEventListener("change", (event) => {
      const checkbox = event.target.closest("input[data-role='toggle']");
      if (!checkbox) {
        return;
      }

      toggleTask(checkbox.dataset.id, checkbox.checked);
    });
    monthlyTaskList.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) {
        return;
      }

      const { id, action } = button.dataset;
      if (action === "edit") {
        editTask(id);
      } else if (action === "delete") {
        deleteTask(id);
      }
    });
    monthlyTaskList.addEventListener("change", (event) => {
      const checkbox = event.target.closest("input[data-role='toggle']");
      if (!checkbox) {
        return;
      }

      toggleTask(checkbox.dataset.id, checkbox.checked);
    });

    clearCompletedBtn.addEventListener("click", clearCompletedTasks);
    deleteAllBtn.addEventListener("click", deleteCurrentViewTasks);
    exportBtn.addEventListener("click", exportTasks);
    importBtn.addEventListener("click", () => importFileInput.click());
    restoreSnapshotBtn.addEventListener("click", restoreFromSnapshot);
    importFileInput.addEventListener("change", importTasksFromFile);
    warningHoursInput.addEventListener("change", saveSettingsFromInputs);
    dangerHoursInput.addEventListener("change", saveSettingsFromInputs);
    installAppBtn.addEventListener("click", handleInstallApp);
    installHelpBtn.addEventListener("click", showInstallHelp);
    versionInfoTrigger.addEventListener("click", openVersionInfoModal);
    versionInfoCloseBtn.addEventListener("click", closeVersionInfoModal);
    versionInfoBackdrop.addEventListener("click", closeVersionInfoModal);
    versionInfoDismissBtn.addEventListener("click", closeVersionInfoModal);
    announcementTrigger.addEventListener("click", openAnnouncementModal);
    announcementCloseBtn.addEventListener("click", closeAnnouncementModal);
    announcementBackdrop.addEventListener("click", closeAnnouncementModal);
    announcementDismissBtn.addEventListener("click", closeAnnouncementModal);
    announcementMarkReadBtn.addEventListener("click", handleAnnouncementPrimaryAction);
    announcementSettingsBtn.addEventListener("click", toggleAnnouncementSettings);
    announcementTabPatch.addEventListener("click", () => switchAnnouncementTab("patch"));
    announcementTabMessages.addEventListener("click", () => switchAnnouncementTab("messages"));
    announcementDefaultPatchBtn.addEventListener("click", () => updateAnnouncementDefaultTab("patch"));
    announcementDefaultMessagesBtn.addEventListener("click", () => updateAnnouncementDefaultTab("messages"));
    announcementMessagesMoreBtn.addEventListener("click", showAllAnnouncementMessages);
    announcementMessagesList.addEventListener("click", handleAnnouncementMessageClick);
    announcementMessageDetailCloseBtn.addEventListener("click", closeAnnouncementMessageDetail);
    announcementMessageDetailBackBtn.addEventListener("click", closeAnnouncementMessageDetail);
    announcementMessageDetailMarkReadBtn.addEventListener("click", handleAnnouncementMessageDetailPrimaryAction);
    refreshQuoteBtn.addEventListener("click", refreshQuoteForCurrentView);
    editQuoteBtn.addEventListener("click", editQuoteForCurrentView);
    saveQuoteBtn.addEventListener("click", saveCurrentQuoteToLibrary);
    hideQuoteBtn.addEventListener("click", hideCurrentQuoteForCurrentView);
    manageQuoteBtn.addEventListener("click", manageQuotesForCurrentView);
    monthlyClearCompletedBtn.addEventListener("click", clearCompletedMonthlyTasks);
    monthlyDeleteAllBtn.addEventListener("click", deleteAllMonthlyTasks);
    saveDailyReviewBtn.addEventListener("click", saveDailyReview);
    clearDailyReviewBtn.addEventListener("click", clearDailyReview);
    saveMonthlyReviewBtn.addEventListener("click", saveMonthlyReview);
    clearMonthlyReviewBtn.addEventListener("click", clearMonthlyReview);
    dailyReviewInput.addEventListener("input", () => markReviewDirty("daily"));
    monthlyReviewInput.addEventListener("input", () => markReviewDirty("monthly"));
    dailyReviewInput.addEventListener("keydown", handleReviewShortcut);
    monthlyReviewInput.addEventListener("keydown", handleReviewShortcut);

    function createTaskId() {
      return `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
    }

    function getDefaultAnnouncementReadState() {
      return {
        patchId: "",
        messageIds: []
      };
    }

    function loadAnnouncementReadState() {
      try {
        const raw = localStorage.getItem(ANNOUNCEMENT_READ_KEY);
        if (!raw) {
          return getDefaultAnnouncementReadState();
        }

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") {
          return getDefaultAnnouncementReadState();
        }

        return {
          patchId: typeof parsed.patchId === "string" ? parsed.patchId : "",
          messageIds: Array.isArray(parsed.messageIds)
            ? parsed.messageIds.filter((id) => typeof id === "string")
            : []
        };
      } catch (error) {
        try {
          const legacy = localStorage.getItem(ANNOUNCEMENT_READ_KEY);
          if (typeof legacy === "string" && legacy) {
            return {
              patchId: legacy,
              messageIds: []
            };
          }
        } catch (storageError) {
          // Ignore storage failures.
        }

        return getDefaultAnnouncementReadState();
      }
    }

    function saveAnnouncementReadState() {
      try {
        localStorage.setItem(ANNOUNCEMENT_READ_KEY, JSON.stringify(announcementReadState));
      } catch (error) {
        // Ignore storage failures and keep UI state in memory.
      }
    }

    function loadAnnouncementDefaultTab() {
      try {
        const raw = localStorage.getItem(ANNOUNCEMENT_DEFAULT_TAB_KEY);
        return raw === "messages" ? "messages" : "patch";
      } catch (error) {
        return "patch";
      }
    }

    function saveAnnouncementDefaultTab() {
      try {
        localStorage.setItem(ANNOUNCEMENT_DEFAULT_TAB_KEY, announcementDefaultTab);
      } catch (error) {
        // Ignore storage failures and keep UI state in memory.
      }
    }

    function hasPatchAnnouncement() {
      return Array.isArray(ANNOUNCEMENT_PATCH.items) && ANNOUNCEMENT_PATCH.items.length > 0;
    }

    function getFirstAnnouncementMessageId() {
      return ANNOUNCEMENT_MESSAGES[0] ? ANNOUNCEMENT_MESSAGES[0].id : "";
    }

    function getAnnouncementMessageById(messageId) {
      return ANNOUNCEMENT_MESSAGES.find((message) => message.id === messageId) || null;
    }

    function getFirstUnreadAnnouncementMessageId() {
      const unreadMessage = ANNOUNCEMENT_MESSAGES.find((message) => isAnnouncementMessageUnread(message.id));
      return unreadMessage ? unreadMessage.id : getFirstAnnouncementMessageId();
    }

    function isPatchAnnouncementUnread() {
      return hasPatchAnnouncement() && announcementReadState.patchId !== ANNOUNCEMENT_PATCH.id;
    }

    function isAnnouncementMessageUnread(messageId) {
      return !announcementReadState.messageIds.includes(messageId);
    }

    function getUnreadAnnouncementMessageCount() {
      return ANNOUNCEMENT_MESSAGES.filter((message) => isAnnouncementMessageUnread(message.id)).length;
    }

    function hasUnreadAnnouncementMessages() {
      return getUnreadAnnouncementMessageCount() > 0;
    }

    function isAnnouncementUnread() {
      return isPatchAnnouncementUnread() || hasUnreadAnnouncementMessages();
    }

    function getInitialAnnouncementTab() {
      if (isPatchAnnouncementUnread()) {
        return "patch";
      }

      if (hasUnreadAnnouncementMessages()) {
        return "messages";
      }

      return announcementDefaultTab;
    }

    function ensureAnnouncementMessageSelection() {
      if (!ANNOUNCEMENT_MESSAGES.length) {
        selectedAnnouncementMessageId = "";
        return;
      }

      if (getAnnouncementMessageById(selectedAnnouncementMessageId)) {
        return;
      }

      selectedAnnouncementMessageId = getFirstUnreadAnnouncementMessageId();
    }

    function renderAnnouncementTrigger() {
      const unread = isAnnouncementUnread();
      announcementTrigger.textContent = unread ? "新公告" : "公告";
      announcementTrigger.classList.toggle("unread", unread);
      announcementTrigger.classList.toggle("read", !unread);
      announcementTrigger.setAttribute(
        "aria-label",
        unread ? `查看 ${ANNOUNCEMENT_VERSION} 新公告` : `查看 ${ANNOUNCEMENT_VERSION} 公告详情`
      );
      announcementDismissBtn.textContent = unread ? "稍后再看" : "关闭";

      if (activeAnnouncementTab === "patch") {
        announcementMarkReadBtn.textContent = isPatchAnnouncementUnread() ? "标记补丁已读" : "关闭公告";
      } else {
        const selectedMessage = getAnnouncementMessageById(selectedAnnouncementMessageId);
        announcementMarkReadBtn.textContent = selectedMessage && isAnnouncementMessageUnread(selectedMessage.id)
          ? "标记本条已读"
          : "关闭公告";
      }
    }

    function renderAnnouncementSettings() {
      announcementSettingsPanel.hidden = !isAnnouncementSettingsOpen;
      announcementDefaultPatchBtn.classList.toggle("active", announcementDefaultTab === "patch");
      announcementDefaultMessagesBtn.classList.toggle("active", announcementDefaultTab === "messages");
    }

    function renderAnnouncementTabs() {
      const patchActive = activeAnnouncementTab === "patch";
      const unreadMessageCount = getUnreadAnnouncementMessageCount();

      announcementTabPatch.classList.toggle("active", patchActive);
      announcementTabPatch.setAttribute("aria-selected", String(patchActive));
      announcementTabMessages.classList.toggle("active", !patchActive);
      announcementTabMessages.setAttribute("aria-selected", String(!patchActive));

      announcementTabPatchDot.hidden = !isPatchAnnouncementUnread();
      announcementTabMessagesCount.hidden = unreadMessageCount === 0;
      announcementTabMessagesCount.textContent = String(unreadMessageCount);
    }

    function renderPatchAnnouncementPanel() {
      const hasPatch = hasPatchAnnouncement();
      announcementPatchPanel.hidden = activeAnnouncementTab !== "patch";
      announcementPatchEmpty.hidden = activeAnnouncementTab !== "patch" || hasPatch;

      if (!hasPatch) {
        announcementPatchTitle.textContent = "";
        announcementPatchSummary.textContent = "";
        announcementPatchList.innerHTML = "";
        return;
      }

      announcementPatchTitle.textContent = ANNOUNCEMENT_PATCH.title;
      announcementPatchSummary.textContent = ANNOUNCEMENT_PATCH.summary;
      announcementPatchList.innerHTML = ANNOUNCEMENT_PATCH.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    }

    function renderAnnouncementMessagesList() {
      const visibleMessages = announcementShowAllMessages ? ANNOUNCEMENT_MESSAGES : ANNOUNCEMENT_MESSAGES.slice(0, 3);
      announcementMessagesList.innerHTML = visibleMessages.map((message) => {
        const unread = isAnnouncementMessageUnread(message.id);
        const active = selectedAnnouncementMessageId === message.id;
        const statusText = unread ? "未读" : "已读";
        return `
          <button class="announcement-message-item ${unread ? "unread" : "read"} ${active ? "active" : ""}" type="button" data-announcement-message="${message.id}">
            <span class="announcement-message-dot" aria-hidden="true"></span>
            <span class="announcement-message-main">
              <span class="announcement-message-title">${escapeHtml(message.title)}</span>
              <span class="announcement-message-meta">${escapeHtml(message.time)} · ${statusText}</span>
            </span>
            <span class="announcement-message-arrow" aria-hidden="true">›</span>
          </button>
        `;
      }).join("");

      announcementMessagesMoreBtn.hidden = ANNOUNCEMENT_MESSAGES.length <= 3 || announcementShowAllMessages;
    }

    function renderMessagesAnnouncementPanel() {
      announcementMessagesPanel.hidden = activeAnnouncementTab !== "messages";
      ensureAnnouncementMessageSelection();
      renderAnnouncementMessagesList();
      announcementMessageEmpty.hidden = activeAnnouncementTab !== "messages" || ANNOUNCEMENT_MESSAGES.length > 0;
    }

    function renderAnnouncementModal() {
      renderAnnouncementSettings();
      renderAnnouncementTabs();
      renderPatchAnnouncementPanel();
      renderMessagesAnnouncementPanel();
      renderAnnouncementDetailOverlay();
      renderAnnouncementTrigger();
    }

    function initAnnouncementSupport() {
      document.addEventListener("keydown", handleAnnouncementKeydown);
      document.addEventListener("click", handleAnnouncementDocumentClick);
    }

    function handleAnnouncementKeydown(event) {
      if (event.key === "Escape" && !versionInfoModal.hidden) {
        closeVersionInfoModal();
        return;
      }

      if (event.key === "Escape" && !announcementModal.hidden) {
        if (isAnnouncementSettingsOpen) {
          isAnnouncementSettingsOpen = false;
          renderAnnouncementSettings();
          return;
        }

        if (!announcementMessageDetailOverlay.hidden) {
          closeAnnouncementMessageDetail();
          return;
        }

        closeAnnouncementModal();
      }
    }

    function openVersionInfoModal() {
      versionInfoModal.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeVersionInfoModal() {
      versionInfoModal.hidden = true;
      if (announcementModal.hidden) {
        document.body.style.overflow = "";
      }
    }

    function handleAnnouncementDocumentClick(event) {
      if (
        !isAnnouncementSettingsOpen ||
        announcementModal.hidden ||
        announcementSettingsPanel.contains(event.target) ||
        announcementSettingsBtn.contains(event.target)
      ) {
        return;
      }

      isAnnouncementSettingsOpen = false;
      renderAnnouncementSettings();
    }

    function openAnnouncementModal() {
      closeVersionInfoModal();
      activeAnnouncementTab = getInitialAnnouncementTab();
      selectedAnnouncementMessageId = getFirstUnreadAnnouncementMessageId();
      announcementShowAllMessages = false;
      isAnnouncementSettingsOpen = false;
      renderAnnouncementModal();
      announcementModal.hidden = false;
      document.body.style.overflow = "hidden";

      if (activeAnnouncementTab === "patch" && hasPatchAnnouncement()) {
        openAnnouncementPatchDetail();
      }
    }

    function closeAnnouncementModal() {
      announcementModal.hidden = true;
      isAnnouncementSettingsOpen = false;
      closeAnnouncementMessageDetail();
      document.body.style.overflow = "";
    }

    function toggleAnnouncementSettings() {
      isAnnouncementSettingsOpen = !isAnnouncementSettingsOpen;
      renderAnnouncementSettings();
    }

    function updateAnnouncementDefaultTab(tabName) {
      announcementDefaultTab = tabName === "messages" ? "messages" : "patch";
      saveAnnouncementDefaultTab();
      renderAnnouncementSettings();
    }

    function switchAnnouncementTab(tabName) {
      activeAnnouncementTab = tabName === "messages" ? "messages" : "patch";
      ensureAnnouncementMessageSelection();
      renderAnnouncementModal();

      if (activeAnnouncementTab === "patch" && hasPatchAnnouncement()) {
        openAnnouncementPatchDetail();
        return;
      }

      closeAnnouncementMessageDetail();
    }

    function showAllAnnouncementMessages() {
      announcementShowAllMessages = true;
      renderMessagesAnnouncementPanel();
    }

    function handleAnnouncementMessageClick(event) {
      const button = event.target.closest("[data-announcement-message]");
      if (!button) {
        return;
      }

      selectedAnnouncementMessageId = button.dataset.announcementMessage;
      openAnnouncementMessageDetail();
    }

    function markPatchAnnouncementAsRead() {
      announcementReadState.patchId = ANNOUNCEMENT_PATCH.id;
      saveAnnouncementReadState();
    }

    function markAnnouncementMessageAsRead(messageId) {
      if (!messageId || announcementReadState.messageIds.includes(messageId)) {
        return;
      }

      announcementReadState.messageIds = [...announcementReadState.messageIds, messageId];
      saveAnnouncementReadState();
    }

    function renderAnnouncementDetailOverlay() {
      if (activeAnnouncementTab === "patch") {
        announcementDetailKicker.textContent = "补丁详情";
        announcementMessageDetailBackBtn.textContent = "返回公告面板";

        if (!hasPatchAnnouncement()) {
          announcementMessageDetailTitle.textContent = "";
          announcementMessageDetailMeta.textContent = "";
          announcementMessageDetailBody.innerHTML = "";
          announcementMessageDetailMarkReadBtn.textContent = "关闭详情";
          return;
        }

        announcementMessageDetailTitle.textContent = ANNOUNCEMENT_PATCH.title;
        announcementMessageDetailMeta.textContent = `${ANNOUNCEMENT_VERSION} · ${isPatchAnnouncementUnread() ? "未读" : "已读"}`;
        announcementMessageDetailBody.innerHTML = [
          `<p>${escapeHtml(ANNOUNCEMENT_PATCH.summary)}</p>`,
          `<ul class="announcement-list">${ANNOUNCEMENT_PATCH.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
        ].join("");
        announcementMessageDetailMarkReadBtn.textContent = isPatchAnnouncementUnread() ? "标记补丁已读" : "关闭详情";
        return;
      }

      const selectedMessage = getAnnouncementMessageById(selectedAnnouncementMessageId);
      announcementDetailKicker.textContent = "消息详情";
      announcementMessageDetailBackBtn.textContent = "返回消息列表";

      if (!selectedMessage) {
        announcementMessageDetailTitle.textContent = "";
        announcementMessageDetailMeta.textContent = "";
        announcementMessageDetailBody.innerHTML = "";
        announcementMessageDetailMarkReadBtn.textContent = "标记本条已读";
        return;
      }

      announcementMessageDetailTitle.textContent = selectedMessage.title;
      announcementMessageDetailMeta.textContent = `${selectedMessage.time} · ${isAnnouncementMessageUnread(selectedMessage.id) ? "未读" : "已读"}`;
      announcementMessageDetailBody.innerHTML = selectedMessage.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
      announcementMessageDetailMarkReadBtn.textContent = isAnnouncementMessageUnread(selectedMessage.id) ? "标记本条已读" : "关闭详情";
    }

    function openAnnouncementMessageDetail() {
      renderAnnouncementDetailOverlay();
      announcementMessageDetailOverlay.hidden = false;
    }

    function openAnnouncementPatchDetail() {
      renderAnnouncementDetailOverlay();
      announcementMessageDetailOverlay.hidden = false;
    }

    function closeAnnouncementMessageDetail() {
      announcementMessageDetailOverlay.hidden = true;
    }

    function handleAnnouncementMessageDetailPrimaryAction() {
      if (activeAnnouncementTab === "patch") {
        if (isPatchAnnouncementUnread()) {
          markPatchAnnouncementAsRead();
          renderAnnouncementModal();
          closeAnnouncementMessageDetail();
          return;
        }

        closeAnnouncementMessageDetail();
        return;
      }

      const selectedMessage = getAnnouncementMessageById(selectedAnnouncementMessageId);

      if (selectedMessage && isAnnouncementMessageUnread(selectedMessage.id)) {
        markAnnouncementMessageAsRead(selectedMessage.id);
        renderAnnouncementModal();
        closeAnnouncementMessageDetail();
        return;
      }

      closeAnnouncementMessageDetail();
    }

    function handleAnnouncementPrimaryAction() {
      if (activeAnnouncementTab === "patch" && isPatchAnnouncementUnread()) {
        markPatchAnnouncementAsRead();
        renderAnnouncementModal();
        return;
      }

      if (activeAnnouncementTab === "messages") {
        const selectedMessage = getAnnouncementMessageById(selectedAnnouncementMessageId);
        if (selectedMessage && isAnnouncementMessageUnread(selectedMessage.id)) {
          markAnnouncementMessageAsRead(selectedMessage.id);
          renderAnnouncementModal();
          return;
        }
      }

      closeAnnouncementModal();
    }

    function initManualSupport() {
      if (!manualDock || !manualCloseBtn || !manualNav || !manualContent) {
        return;
      }

      ensureManualToggleButton();
      manualCloseBtn.addEventListener("click", () => setManualOpen(false));
      manualNav.addEventListener("click", handleManualNavClick);
      manualNav.addEventListener("wheel", handleManualNavWheel, { passive: false });
      document.addEventListener("click", handleManualContextClick);
      document.addEventListener("keydown", handleManualKeydown);
      syncManualActiveState(MANUAL_DEFAULT_SECTION);
    }

    function ensureManualToggleButton() {
      const brandCopy = announcementTrigger.closest(".brand-copy");
      if (!brandCopy) {
        return;
      }

      let heroLinks = brandCopy.querySelector(".hero-links");
      if (!heroLinks) {
        heroLinks = document.createElement("div");
        heroLinks.className = "hero-links";
        brandCopy.insertBefore(heroLinks, announcementTrigger);
        heroLinks.appendChild(announcementTrigger);
      }

      manualToggleBtn = heroLinks.querySelector("#manualToggleBtn");
      if (manualToggleBtn) {
        return;
      }

      manualToggleBtn = document.createElement("button");
      manualToggleBtn.id = "manualToggleBtn";
      manualToggleBtn.className = "manual-toggle-btn";
      manualToggleBtn.type = "button";
      manualToggleBtn.textContent = "用户手册";
      manualToggleBtn.setAttribute("aria-controls", "manualDock");
      manualToggleBtn.setAttribute("aria-expanded", "false");
      manualToggleBtn.addEventListener("click", toggleManual);
      heroLinks.appendChild(manualToggleBtn);

      if (heroLinks.lastElementChild !== announcementTrigger) {
        heroLinks.appendChild(announcementTrigger);
      }
    }

    function handleManualNavClick(event) {
      const button = event.target.closest("button[data-manual-target]");
      if (!button) {
        return;
      }

      openManual(button.dataset.manualTarget, { forceHighlight: true });
    }

    function handleManualNavWheel(event) {
      if (!manualNav || manualNav.scrollWidth <= manualNav.clientWidth) {
        return;
      }

      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return;
      }

      const nextScrollLeft = manualNav.scrollLeft + event.deltaY;
      const maxScrollLeft = manualNav.scrollWidth - manualNav.clientWidth;
      const clampedScrollLeft = Math.max(0, Math.min(nextScrollLeft, maxScrollLeft));

      if (clampedScrollLeft === manualNav.scrollLeft) {
        return;
      }

      event.preventDefault();
      manualNav.scrollLeft = clampedScrollLeft;
    }

    function handleManualKeydown(event) {
      if (event.key === "Escape" && manualDock && !manualDock.hidden && announcementModal.hidden && versionInfoModal.hidden) {
        setManualOpen(false);
      }
    }

    function handleManualContextClick(event) {
      if (
        !manualDock ||
        manualDock.hidden ||
        manualDock.contains(event.target) ||
        announcementModal.contains(event.target) ||
        versionInfoModal.contains(event.target)
      ) {
        return;
      }

      const sectionId = getManualSectionFromTarget(event.target);
      if (!sectionId) {
        return;
      }

      focusManualSection(sectionId, { forceHighlight: true });
    }

    function getManualSectionFromTarget(target) {
      if (!(target instanceof Element)) {
        return "";
      }

      const matched = MANUAL_SECTION_LINKS.find((item) => target.closest(item.selector));
      return matched ? matched.sectionId : "";
    }

    function toggleManual() {
      if (!manualDock) {
        return;
      }

      if (manualDock.hidden) {
        openManual();
        return;
      }

      setManualOpen(false);
    }

    function setManualOpen(isOpen) {
      if (!manualDock) {
        return;
      }

      manualDock.hidden = !isOpen;
      if (manualToggleBtn) {
        manualToggleBtn.setAttribute("aria-expanded", String(isOpen));
      }
    }

    function openManual(sectionId = MANUAL_DEFAULT_SECTION, options = {}) {
      setManualOpen(true);
      focusManualSection(sectionId, options);
    }

    function focusManualSection(sectionId, options = {}) {
      if (!manualContent || !MANUAL_SECTION_IDS.includes(sectionId)) {
        return;
      }

      if (
        activeManualSectionId === sectionId &&
        !options.forceHighlight &&
        !manualDock.hidden
      ) {
        return;
      }

      const nextSection = document.getElementById(sectionId);
      if (!nextSection) {
        return;
      }

      activeManualSectionId = sectionId;
      syncManualActiveState(sectionId);

      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      manualContent.scrollTo({ top: 0, behavior });
      const activeButton = manualNav.querySelector(`[data-manual-target="${sectionId}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior, inline: "center", block: "nearest" });
      }

      nextSection.classList.remove("is-active");
      requestAnimationFrame(() => {
        nextSection.classList.add("is-active");
      });
    }

    function syncManualActiveState(sectionId) {
      const targetSectionId = sectionId || MANUAL_DEFAULT_SECTION;

      manualNav.querySelectorAll("[data-manual-target]").forEach((button) => {
        button.classList.toggle("active", button.dataset.manualTarget === targetSectionId);
      });

      manualContent.querySelectorAll(".manual-section").forEach((section) => {
        section.classList.toggle("is-active", section.id === targetSectionId);
      });
    }

    function loadTasks() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          return normalizeTasks(JSON.parse(raw), false);
        }

        const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacyRaw) {
          const legacy = JSON.parse(legacyRaw);
          const migrated = normalizeTasks(legacy, true);
          saveTasks(migrated);
          return migrated;
        }

        saveTasks(DEFAULT_TASKS);
        return [...DEFAULT_TASKS];
      } catch (error) {
        saveTasks(DEFAULT_TASKS);
        return [...DEFAULT_TASKS];
      }
    }

    function normalizeTasks(input, migrateLegacy) {
      if (!Array.isArray(input)) {
        throw new Error("Invalid task data");
      }

      const normalized = input
        .filter((item) => item && typeof item.text === "string")
        .map((item) => {
          const type = item.type === "monthly" ? "monthly" : "daily";
          const dateKey = normalizeDateKey(item.dateKey, type, migrateLegacy);
          return {
            id: String(item.id || createTaskId()),
            text: item.text.trim(),
            done: Boolean(item.done),
            type,
            dateKey,
            spanStartKey: normalizeSpanStartKey(item.spanStartKey, dateKey, type),
            spanEndKey: normalizeSpanEndKey(item.spanEndKey, item.spanStartKey, dateKey, type, item.deadline),
            deadline: normalizeDeadline(item.deadline, type, dateKey),
            createdAt: normalizeCreatedAt(item.createdAt, item.id),
            completedAt: item.done ? normalizeCompletedAt(item.completedAt) : ""
          };
        })
        .filter((item) => item.text.length > 0);

      if (!normalized.length) {
        return [...DEFAULT_TASKS];
      }
      return normalized;
    }

    function normalizeDateKey(value, type, migrateLegacy) {
      if (typeof value === "string" && /^\d{4}-\d{2}(-\d{2})?$/.test(value)) {
        if (type === "monthly") {
          return value.slice(0, 7);
        }
        return value.length === 7 ? `${value}-01` : value;
      }

      if (migrateLegacy) {
        return type === "monthly" ? defaultMonthKey : todayKey;
      }

      return type === "monthly" ? defaultMonthKey : todayKey;
    }

    function normalizeDeadline(value, type, dateKey) {
      if (typeof value === "string" && value) {
        return value;
      }
      if (type === "monthly") {
        return `${dateKey}-28T21:00`;
      }
      return setTimeForDate(dateKey, 21, 0);
    }

    function normalizeSpanStartKey(value, dateKey, type) {
      if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
      }
      return type === "monthly" ? `${dateKey}-01` : dateKey;
    }

    function normalizeSpanEndKey(value, spanStartKey, dateKey, type, deadlineValue = "") {
      const normalizedStartKey = normalizeSpanStartKey(spanStartKey, dateKey, type);
      const fallback = type === "monthly" ? getLastDayOfMonthKey(dateKey) : normalizedStartKey;
      let candidate = typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
        ? value
        : fallback;
      const deadlineDateKey = extractDateKeyFromDateTime(deadlineValue);
      if (type === "daily" && deadlineDateKey && compareDateKeys(deadlineDateKey, candidate) > 0) {
        candidate = deadlineDateKey;
      }
      return compareDateKeys(candidate, normalizedStartKey) < 0 ? normalizedStartKey : candidate;
    }

    function normalizeCompletedAt(value) {
      if (typeof value === "string" && value) {
        return value;
      }
      return new Date().toISOString();
    }

    function normalizeCreatedAt(value, id) {
      if (typeof value === "string" && value) {
        return value;
      }

      const rawId = String(id || "");
      const timestamp = Number(rawId.split("-")[0]);
      if (Number.isFinite(timestamp) && timestamp > 0) {
        return new Date(timestamp).toISOString();
      }

      return new Date().toISOString();
    }

    function saveTasks(nextTasks, options = {}) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks));
      if (!options.skipSnapshot) {
        saveSnapshot(options.reason || "tasks");
      }
    }

    function loadSettings() {
      try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (!raw) {
          const defaults = { warningHours: 24, dangerHours: 0 };
          localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaults));
          return defaults;
        }

        const parsed = JSON.parse(raw);
        return {
          warningHours: sanitizeHourValue(parsed.warningHours, 24),
          dangerHours: sanitizeHourValue(parsed.dangerHours, 0)
        };
      } catch (error) {
        const defaults = { warningHours: 24, dangerHours: 0 };
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaults));
        return defaults;
      }
    }

    function saveSettings(nextSettings, options = {}) {
      settings = {
        warningHours: sanitizeHourValue(nextSettings.warningHours, 24),
        dangerHours: sanitizeHourValue(nextSettings.dangerHours, 0)
      };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      if (!options.skipSnapshot) {
        saveSnapshot(options.reason || "settings");
      }
    }

    function saveSettingsFromInputs() {
      saveSettings({
        warningHours: warningHoursInput.value,
        dangerHours: dangerHoursInput.value
      });
      syncSettingsInputs();
      renderAll();
    }

    function syncSettingsInputs() {
      warningHoursInput.value = String(settings.warningHours);
      dangerHoursInput.value = String(settings.dangerHours);
    }

    function createEmptyQuoteLibrary() {
      return {
        version: QUOTE_LIBRARY_VERSION,
        added: { daily: [], monthly: [] },
        hidden: { daily: [], monthly: [] },
        history: []
      };
    }

    function loadQuoteLibrary() {
      const defaults = createEmptyQuoteLibrary();

      try {
        const raw = localStorage.getItem(QUOTE_LIBRARY_KEY);
        if (!raw) {
          localStorage.setItem(QUOTE_LIBRARY_KEY, JSON.stringify(defaults));
          return defaults;
        }

        const normalized = normalizeQuoteLibrary(JSON.parse(raw));
        localStorage.setItem(QUOTE_LIBRARY_KEY, JSON.stringify(normalized));
        return normalized;
      } catch (error) {
        localStorage.setItem(QUOTE_LIBRARY_KEY, JSON.stringify(defaults));
        return defaults;
      }
    }

    function normalizeQuoteLibrary(input) {
      const normalized = createEmptyQuoteLibrary();
      if (!input || typeof input !== "object") {
        return normalized;
      }

      ["daily", "monthly"].forEach((view) => {
        const addedItems = Array.isArray(input?.added?.[view]) ? input.added[view] : [];
        const hiddenItems = Array.isArray(input?.hidden?.[view]) ? input.hidden[view] : [];
        const seenAddedTexts = new Set();
        const seenHiddenTexts = new Set();

        addedItems.forEach((item) => {
          const text = normalizeQuoteText(typeof item === "string" ? item : item?.text);
          if (!text) {
            return;
          }
          const key = text.toLocaleLowerCase("zh-CN");
          if (seenAddedTexts.has(key)) {
            return;
          }
          seenAddedTexts.add(key);
          normalized.added[view].push({
            id: typeof item?.id === "string" && item.id ? item.id : createAddedQuoteId(view, text),
            text,
            createdAt: typeof item?.createdAt === "string" && item.createdAt
              ? item.createdAt
              : new Date().toISOString()
          });
        });

        hiddenItems.forEach((item) => {
          const text = normalizeQuoteText(typeof item === "string" ? item : item?.text);
          if (!text) {
            return;
          }
          const key = text.toLocaleLowerCase("zh-CN");
          if (seenHiddenTexts.has(key)) {
            return;
          }
          seenHiddenTexts.add(key);
          normalized.hidden[view].push({
            id: typeof item?.id === "string" && item.id ? item.id : `${view}-hidden-${hashText(text)}`,
            text,
            source: item?.source === "added" ? "added" : "default",
            hiddenAt: typeof item?.hiddenAt === "string" && item.hiddenAt
              ? item.hiddenAt
              : new Date().toISOString()
          });
        });
      });

      const history = Array.isArray(input.history) ? input.history : [];
      normalized.history = history
        .filter((item) => item && typeof item === "object")
        .map((item) => ({
          id: typeof item.id === "string" && item.id ? item.id : createTaskId(),
          action: typeof item.action === "string" ? item.action : "update",
          view: item.view === "monthly" ? "monthly" : "daily",
          quoteId: typeof item.quoteId === "string" ? item.quoteId : "",
          text: normalizeQuoteText(item.text),
          actedAt: typeof item.actedAt === "string" && item.actedAt
            ? item.actedAt
            : new Date().toISOString()
        }))
        .filter((item) => item.text)
        .slice(-200);

      return normalized;
    }

    function loadQuoteState() {
      const defaults = createEmptyQuoteState();

      try {
        const raw = localStorage.getItem(QUOTE_KEY);
        if (!raw) {
          ensureQuoteForView("daily", defaults, quoteLibrary);
          ensureQuoteForView("monthly", defaults, quoteLibrary);
          localStorage.setItem(QUOTE_KEY, JSON.stringify(defaults));
          return defaults;
        }

        const normalized = normalizeQuoteState(JSON.parse(raw), quoteLibrary);
        localStorage.setItem(QUOTE_LIBRARY_KEY, JSON.stringify(quoteLibrary));
        localStorage.setItem(QUOTE_KEY, JSON.stringify(normalized));
        return normalized;
      } catch (error) {
        ensureQuoteForView("daily", defaults, quoteLibrary);
        ensureQuoteForView("monthly", defaults, quoteLibrary);
        localStorage.setItem(QUOTE_KEY, JSON.stringify(defaults));
        return defaults;
      }
    }

    function createEmptyQuoteState() {
      return {
        version: QUOTE_STATE_VERSION,
        current: { daily: "", monthly: "" },
        currentMeta: { daily: null, monthly: null },
        recent: { daily: [], monthly: [] }
      };
    }

    function persistQuotePreferences(options = {}) {
      quoteLibrary = normalizeQuoteLibrary(quoteLibrary);
      quoteState = normalizeQuoteState(quoteState, quoteLibrary);
      quoteState.version = QUOTE_STATE_VERSION;
      quoteLibrary.version = QUOTE_LIBRARY_VERSION;
      localStorage.setItem(QUOTE_KEY, JSON.stringify(quoteState));
      localStorage.setItem(QUOTE_LIBRARY_KEY, JSON.stringify(quoteLibrary));
      if (!options.skipSnapshot) {
        saveSnapshot(options.reason || "quotes");
      }
    }

    function loadReviews() {
      const defaults = createEmptyReviewState();

      try {
        const raw = localStorage.getItem(REVIEW_KEY);
        if (!raw) {
          localStorage.setItem(REVIEW_KEY, JSON.stringify(defaults));
          return defaults;
        }

        const parsed = JSON.parse(raw);
        const normalized = normalizeReviews(parsed);
        localStorage.setItem(REVIEW_KEY, JSON.stringify(normalized));
        return normalized;
      } catch (error) {
        localStorage.setItem(REVIEW_KEY, JSON.stringify(defaults));
        return defaults;
      }
    }

    function createEmptyReviewState() {
      return { daily: {}, monthly: {} };
    }

    function normalizeReviews(input) {
      const normalized = createEmptyReviewState();
      if (!input || typeof input !== "object") {
        return normalized;
      }

      ["daily", "monthly"].forEach((type) => {
        const bucket = input[type];
        if (!bucket || typeof bucket !== "object") {
          return;
        }

        Object.entries(bucket).forEach(([key, value]) => {
          if (!isValidReviewKey(type, key)) {
            return;
          }

          const content = typeof value?.content === "string"
            ? value.content.trim()
            : typeof value === "string"
              ? value.trim()
              : "";

          if (!content) {
            return;
          }

          normalized[type][key] = {
            content,
            updatedAt: typeof value?.updatedAt === "string" && value.updatedAt
              ? value.updatedAt
              : new Date().toISOString()
          };
        });
      });

      return normalized;
    }

    function isValidReviewKey(type, key) {
      return type === "monthly"
        ? /^\d{4}-\d{2}$/.test(key)
        : /^\d{4}-\d{2}-\d{2}$/.test(key);
    }

    function saveReviews(nextReviews = reviews, options = {}) {
      reviews = normalizeReviews(nextReviews);
      localStorage.setItem(REVIEW_KEY, JSON.stringify(reviews));
      if (!options.skipSnapshot) {
        saveSnapshot(options.reason || "reviews");
      }
    }

    function saveSnapshot(reason) {
      const payload = createSnapshotPayload();
      const fingerprint = hashSnapshotPayload(payload);
      const history = loadSnapshotHistory();
      if (history[0]?.fingerprint === fingerprint) {
        return;
      }

      const nextHistory = [
        {
          id: createTaskId(),
          capturedAt: new Date().toISOString(),
          reason,
          fingerprint,
          payload
        },
        ...history
      ].slice(0, SNAPSHOT_LIMIT);

      persistSnapshotHistory(nextHistory);
    }

    function createSnapshotPayload() {
      return {
        app: "daily-note",
        version: 2,
        tasks,
        settings,
        reviews,
        quoteState,
        quoteLibrary
      };
    }

    function loadSnapshotHistory() {
      try {
        const raw = localStorage.getItem(SNAPSHOT_KEY);
        if (!raw) {
          return [];
        }

        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
          return [];
        }

        return parsed.filter((entry) =>
          entry &&
          typeof entry.capturedAt === "string" &&
          typeof entry.fingerprint === "string" &&
          entry.payload &&
          typeof entry.payload === "object"
        );
      } catch (error) {
        return [];
      }
    }

    function persistSnapshotHistory(history) {
      const nextHistory = history.slice(0, SNAPSHOT_LIMIT);
      for (let size = nextHistory.length; size >= 1; size -= 1) {
        try {
          localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(nextHistory.slice(0, size)));
          return;
        } catch (error) {
          // Keep trimming old snapshots until the browser accepts the write.
        }
      }
    }

    function restoreFromSnapshot() {
      const history = loadSnapshotHistory();
      if (!history.length) {
        alert("当前还没有可恢复的最近缓存。");
        return;
      }

      const lines = history.map((entry, index) => (
        `${index + 1}. ${formatSnapshotTime(entry.capturedAt)} · ${formatSnapshotReason(entry.reason)}`
      ));
      const selection = prompt(
        `输入要恢复的缓存编号：\n${lines.join("\n")}`,
        "1"
      );

      if (selection === null) {
        return;
      }

      const selectedIndex = Number(selection) - 1;
      if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= history.length) {
        alert("输入的编号无效。");
        return;
      }

      const confirmed = confirm("恢复前会先为当前状态再留一份缓存。确定继续吗？");
      if (!confirmed) {
        return;
      }

      saveSnapshot("pre-restore");
      applySnapshot(history[selectedIndex]);
      alert("已恢复所选缓存。");
    }

    function applySnapshot(snapshotEntry) {
      const payload = snapshotEntry?.payload;
      if (!payload || typeof payload !== "object") {
        throw new Error("Invalid snapshot payload");
      }

      const nextTasks = normalizeTasks(payload.tasks, false);
      const nextSettings = {
        warningHours: sanitizeHourValue(payload.settings?.warningHours, 24),
        dangerHours: sanitizeHourValue(payload.settings?.dangerHours, 0)
      };
      const nextReviews = normalizeReviews(payload.reviews);
      const nextQuoteLibrary = normalizeQuoteLibrary(payload.quoteLibrary);
      const nextQuoteState = normalizeQuoteState(payload.quoteState, nextQuoteLibrary);

      tasks = nextTasks;
      settings = nextSettings;
      reviews = nextReviews;
      quoteLibrary = nextQuoteLibrary;
      quoteState = nextQuoteState;

      saveTasks(tasks, { skipSnapshot: true });
      saveSettings(settings, { skipSnapshot: true });
      saveReviews(reviews, { skipSnapshot: true });
      persistQuotePreferences({ skipSnapshot: true });
      syncSettingsInputs();
      renderAll();
      saveSnapshot("restore");
    }

    function normalizeQuoteState(input, targetLibrary = quoteLibrary) {
      const nextState = createEmptyQuoteState();
      if (input && typeof input === "object") {
        nextState.current.daily = typeof input?.current?.daily === "string" ? normalizeQuoteText(input.current.daily) : "";
        nextState.current.monthly = typeof input?.current?.monthly === "string" ? normalizeQuoteText(input.current.monthly) : "";
        nextState.currentMeta.daily = normalizeCurrentMeta(input?.currentMeta?.daily);
        nextState.currentMeta.monthly = normalizeCurrentMeta(input?.currentMeta?.monthly);
        nextState.recent.daily = Array.isArray(input?.recent?.daily) ? input.recent.daily.filter((item) => typeof item === "string" && item) : [];
        nextState.recent.monthly = Array.isArray(input?.recent?.monthly) ? input.recent.monthly.filter((item) => typeof item === "string" && item) : [];

        ["daily", "monthly"].forEach((view) => {
          const legacyCustom = normalizeQuoteText(input?.custom?.[view]);
          if (legacyCustom) {
            const result = addQuoteToLibrary(view, legacyCustom, targetLibrary, { trackHistory: false });
            nextState.current[view] = legacyCustom;
            nextState.currentMeta[view] = {
              id: result.entry.id,
              source: result.entry.source
            };
          }
        });
      }

      ensureQuoteForView("daily", nextState, targetLibrary);
      ensureQuoteForView("monthly", nextState, targetLibrary);
      return nextState;
    }

    function formatSnapshotTime(value) {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return "未知时间";
      }
      return new Intl.DateTimeFormat("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    }

    function formatSnapshotReason(reason) {
      if (reason === "settings") {
        return "提醒设置";
      }
      if (reason === "quotes") {
        return "寄语修改";
      }
      if (reason === "reviews") {
        return "复盘修改";
      }
      if (reason === "import") {
        return "导入备份";
      }
      if (reason === "restore") {
        return "恢复缓存";
      }
      if (reason === "pre-restore") {
        return "恢复前备份";
      }
      return "任务改动";
    }

    function hashSnapshotPayload(payload) {
      const serialized = JSON.stringify(payload);
      let hash = 2166136261;
      for (let index = 0; index < serialized.length; index += 1) {
        hash ^= serialized.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }
      return `snap-${(hash >>> 0).toString(16)}`;
    }

    function ensureQuoteForView(view, targetState = quoteState, targetLibrary = quoteLibrary) {
      const currentText = normalizeQuoteText(targetState.current[view]);
      const currentMeta = resolveQuoteMeta(view, currentText, targetState.currentMeta?.[view], targetLibrary);
      const availablePool = getQuotePool(view, targetLibrary);

      if (currentText && currentMeta && (currentMeta.source === "temporary" || isQuoteEntryAvailable(currentMeta.id, currentText, availablePool))) {
        targetState.current[view] = currentText;
        targetState.currentMeta[view] = currentMeta;
        return;
      }

      const nextEntry = pickNextQuoteEntry(view, targetState.recent[view], targetLibrary);
      if (nextEntry) {
        targetState.current[view] = nextEntry.text;
        targetState.currentMeta[view] = {
          id: nextEntry.id,
          source: nextEntry.source
        };
        targetState.recent[view] = updateRecentQuoteIds(targetState.recent[view], nextEntry.id);
        return;
      }

      targetState.current[view] = DEFAULT_QUOTES[view][0] || "";
      targetState.currentMeta[view] = targetState.current[view]
        ? { id: `${view}-default-1`, source: "default" }
        : null;
      targetState.recent[view] = [];
    }

    function pickNextQuoteEntry(view, recentIds, targetLibrary = quoteLibrary) {
      const pool = getQuotePool(view, targetLibrary);
      if (!pool.length) {
        return null;
      }

      const blocked = new Set(recentIds.slice(-Math.min(3, pool.length - 1)));
      const candidates = pool.filter((entry) => !blocked.has(entry.id));
      const source = candidates.length ? candidates : pool;
      return source[Math.floor(Math.random() * source.length)];
    }

    function updateRecentQuoteIds(history, nextId) {
      const nextHistory = [...history.filter((item) => item !== nextId), nextId];
      return nextHistory.slice(-4);
    }

    function renderQuoteCard() {
      const view = state.currentView;
      const currentText = quoteState.current[view];
      const currentMeta = resolveQuoteMeta(view, currentText, quoteState.currentMeta[view], quoteLibrary);
      const addedCount = quoteLibrary.added[view].length;
      const hiddenCount = quoteLibrary.hidden[view].length;
      const isTemporary = currentMeta?.source === "temporary";

      quoteKicker.textContent = view === "daily" ? "TODAY NOTE" : "MONTH NOTE";
      quoteText.textContent = currentText;
      if (isTemporary) {
        quoteNote.textContent = `这句寄语暂时只保留在当前页面。想让它以后继续参与随机展示，可以点“加入寄语库”。已收藏 ${addedCount} 条，隐藏 ${hiddenCount} 条。`;
      } else if (currentMeta?.source === "added") {
        quoteNote.textContent = `这句寄语来自你加入的寄语库。已收藏 ${addedCount} 条，隐藏 ${hiddenCount} 条。`;
      } else {
        quoteNote.textContent = `当前寄语池会综合默认寄语和你加入的寄语，并自动跳过你隐藏过的句子。已收藏 ${addedCount} 条，隐藏 ${hiddenCount} 条。`;
      }

      hideQuoteBtn.disabled = !currentText || isTemporary;
      hideQuoteBtn.style.opacity = hideQuoteBtn.disabled ? "0.55" : "1";
      hideQuoteBtn.style.cursor = hideQuoteBtn.disabled ? "default" : "pointer";
    }

    function refreshQuoteForCurrentView() {
      const view = state.currentView;
      const nextEntry = pickNextQuoteEntry(view, quoteState.recent[view], quoteLibrary);
      if (!nextEntry) {
        alert("当前没有可用寄语。请先恢复已隐藏寄语，或新增一条长期寄语。");
        return;
      }

      quoteState.current[view] = nextEntry.text;
      quoteState.currentMeta[view] = {
        id: nextEntry.id,
        source: nextEntry.source
      };
      quoteState.recent[view] = updateRecentQuoteIds(quoteState.recent[view], nextEntry.id);
      persistQuotePreferences();
      renderQuoteCard();
    }

    function editQuoteForCurrentView() {
      const view = state.currentView;
      const nextText = prompt("临时改写当前页面寄语：", quoteState.current[view]);
      if (nextText === null) {
        return;
      }

      const trimmed = normalizeQuoteText(nextText);
      if (!trimmed) {
        alert("寄语内容不能为空。");
        return;
      }

      quoteState.current[view] = trimmed;
      quoteState.currentMeta[view] = {
        id: createTemporaryQuoteId(view, trimmed),
        source: "temporary"
      };
      persistQuotePreferences();
      renderQuoteCard();
    }

    function saveCurrentQuoteToLibrary() {
      const view = state.currentView;
      const text = normalizeQuoteText(quoteState.current[view]);
      if (!text) {
        return;
      }

      const result = addQuoteToLibrary(view, text);
      quoteState.current[view] = text;
      quoteState.currentMeta[view] = {
        id: result.entry.id,
        source: result.entry.source
      };
      persistQuotePreferences();
      renderQuoteCard();

      if (result.status === "added") {
        alert("这句寄语已经加入长期寄语库。");
      } else if (result.status === "restored-default") {
        alert("这句寄语本来就在默认寄语里，已经恢复参与随机展示。");
      } else if (result.status === "restored-added") {
        alert("这句寄语已经重新加入可用寄语池。");
      } else {
        alert("这句寄语已经在寄语库里了。");
      }
    }

    function hideCurrentQuoteForCurrentView() {
      const view = state.currentView;
      const text = normalizeQuoteText(quoteState.current[view]);
      const currentMeta = resolveQuoteMeta(view, text, quoteState.currentMeta[view], quoteLibrary);
      if (!text || !currentMeta || currentMeta.source === "temporary") {
        return;
      }

      const availableAfterHide = getQuotePool(view, quoteLibrary).filter((entry) =>
        entry.id !== currentMeta.id && normalizeQuoteText(entry.text) !== text
      );
      if (!availableAfterHide.length) {
        alert("至少要保留一条可用寄语。你可以先新增一条长期寄语，再隐藏当前这句。");
        return;
      }

      const confirmed = confirm("确定隐藏当前这句寄语吗？之后它将不再参与随机展示。");
      if (!confirmed) {
        return;
      }

      hideQuote(view, currentMeta, text);
      const nextEntry = pickNextQuoteEntry(view, quoteState.recent[view], quoteLibrary) || availableAfterHide[0];
      quoteState.current[view] = nextEntry.text;
      quoteState.currentMeta[view] = {
        id: nextEntry.id,
        source: nextEntry.source
      };
      quoteState.recent[view] = updateRecentQuoteIds(quoteState.recent[view], nextEntry.id);
      persistQuotePreferences();
      renderQuoteCard();
    }

    function manageQuotesForCurrentView() {
      const view = state.currentView;
      const viewLabel = view === "daily" ? "日度" : "月度";
      const addedItems = quoteLibrary.added[view];
      const hiddenItems = quoteLibrary.hidden[view];
      const selection = prompt(
        `${viewLabel}寄语管理：\n1. 查看我新增的寄语（${addedItems.length}）\n2. 新增一条长期寄语\n3. 删除我新增的一条寄语\n4. 查看已隐藏寄语（${hiddenItems.length}）\n5. 恢复一条已隐藏寄语`,
        "1"
      );

      if (selection === null) {
        return;
      }

      if (selection === "1") {
        if (!addedItems.length) {
          alert("当前还没有你新增的长期寄语。");
          return;
        }
        alert(addedItems.map((item, index) => `${index + 1}. ${item.text}`).join("\n"));
        return;
      }

      if (selection === "2") {
        const text = prompt(`新增一条${viewLabel}长期寄语：`, "");
        if (text === null) {
          return;
        }
        const trimmed = normalizeQuoteText(text);
        if (!trimmed) {
          alert("寄语内容不能为空。");
          return;
        }
        const result = addQuoteToLibrary(view, trimmed);
        quoteState.current[view] = trimmed;
        quoteState.currentMeta[view] = {
          id: result.entry.id,
          source: result.entry.source
        };
        persistQuotePreferences();
        renderQuoteCard();
        alert(result.status === "added" ? "已经加入长期寄语库。" : "这句寄语已经在可用寄语池里了。");
        return;
      }

      if (selection === "3") {
        if (!addedItems.length) {
          alert("当前没有可删除的长期寄语。");
          return;
        }
        const pick = prompt(
          `输入要删除的长期寄语编号：\n${addedItems.map((item, index) => `${index + 1}. ${item.text}`).join("\n")}`,
          "1"
        );
        if (pick === null) {
          return;
        }
        const pickedIndex = Number(pick) - 1;
        if (!Number.isInteger(pickedIndex) || pickedIndex < 0 || pickedIndex >= addedItems.length) {
          alert("输入的编号无效。");
          return;
        }
        const entry = addedItems[pickedIndex];
        removeAddedQuote(view, entry.id);
        const currentMeta = quoteState.currentMeta[view];
        if (currentMeta?.id === entry.id) {
          quoteState.current[view] = "";
          quoteState.currentMeta[view] = null;
          ensureQuoteForView(view);
        }
        persistQuotePreferences();
        renderQuoteCard();
        alert("已删除这条长期寄语。");
        return;
      }

      if (selection === "4") {
        if (!hiddenItems.length) {
          alert("当前没有已隐藏的寄语。");
          return;
        }
        alert(hiddenItems.map((item, index) => `${index + 1}. ${item.text}`).join("\n"));
        return;
      }

      if (selection === "5") {
        if (!hiddenItems.length) {
          alert("当前没有可恢复的隐藏寄语。");
          return;
        }
        const pick = prompt(
          `输入要恢复的隐藏寄语编号：\n${hiddenItems.map((item, index) => `${index + 1}. ${item.text}`).join("\n")}`,
          "1"
        );
        if (pick === null) {
          return;
        }
        const pickedIndex = Number(pick) - 1;
        if (!Number.isInteger(pickedIndex) || pickedIndex < 0 || pickedIndex >= hiddenItems.length) {
          alert("输入的编号无效。");
          return;
        }
        const entry = hiddenItems[pickedIndex];
        restoreHiddenQuote(view, entry.id, entry.text);
        persistQuotePreferences();
        renderQuoteCard();
        alert("这句寄语已经恢复参与随机展示。");
        return;
      }

      alert("没有对应的操作编号。");
    }

    function getDefaultQuoteEntries(view) {
      return DEFAULT_QUOTES[view].map((text, index) => ({
        id: `${view}-default-${index + 1}`,
        text,
        source: "default"
      }));
    }

    function getHiddenQuoteMatchers(view, targetLibrary = quoteLibrary) {
      const hiddenItems = targetLibrary.hidden[view];
      return {
        ids: new Set(hiddenItems.map((item) => item.id)),
        texts: new Set(hiddenItems.map((item) => normalizeQuoteText(item.text).toLocaleLowerCase("zh-CN")))
      };
    }

    function getQuotePool(view, targetLibrary = quoteLibrary) {
      const hidden = getHiddenQuoteMatchers(view, targetLibrary);
      const pool = [];
      const seenTexts = new Set();

      [...getDefaultQuoteEntries(view), ...targetLibrary.added[view].map((item) => ({
        id: item.id,
        text: item.text,
        source: "added"
      }))].forEach((entry) => {
        const normalizedText = normalizeQuoteText(entry.text);
        const textKey = normalizedText.toLocaleLowerCase("zh-CN");
        if (!normalizedText || hidden.ids.has(entry.id) || hidden.texts.has(textKey) || seenTexts.has(textKey)) {
          return;
        }
        seenTexts.add(textKey);
        pool.push({
          id: entry.id,
          text: normalizedText,
          source: entry.source
        });
      });

      return pool;
    }

    function isQuoteEntryAvailable(quoteId, text, pool) {
      const normalizedText = normalizeQuoteText(text);
      return pool.some((entry) => entry.id === quoteId || normalizeQuoteText(entry.text) === normalizedText);
    }

    function resolveQuoteMeta(view, text, preferredMeta = null, targetLibrary = quoteLibrary) {
      const normalizedText = normalizeQuoteText(text);
      if (!normalizedText) {
        return null;
      }

      const normalizedMeta = normalizeCurrentMeta(preferredMeta);
      if (normalizedMeta?.source === "temporary") {
        return normalizedMeta;
      }

      const pool = getQuotePool(view, targetLibrary);
      const textKey = normalizedText.toLocaleLowerCase("zh-CN");
      if (normalizedMeta?.id) {
        const matchById = pool.find((entry) => entry.id === normalizedMeta.id);
        if (matchById) {
          return {
            id: matchById.id,
            source: matchById.source
          };
        }
      }

      const matchByText = pool.find((entry) => normalizeQuoteText(entry.text).toLocaleLowerCase("zh-CN") === textKey);
      if (matchByText) {
        return {
          id: matchByText.id,
          source: matchByText.source
        };
      }

      return {
        id: createTemporaryQuoteId(view, normalizedText),
        source: "temporary"
      };
    }

    function normalizeCurrentMeta(input) {
      if (!input || typeof input !== "object") {
        return null;
      }

      const source = input.source === "added" || input.source === "temporary" ? input.source : "default";
      return typeof input.id === "string" && input.id
        ? { id: input.id, source }
        : null;
    }

    function addQuoteToLibrary(view, text, targetLibrary = quoteLibrary, options = {}) {
      const normalizedText = normalizeQuoteText(text);
      const defaultEntry = getDefaultQuoteEntries(view).find((entry) => normalizeQuoteText(entry.text) === normalizedText);
      const existingAdded = targetLibrary.added[view].find((entry) => normalizeQuoteText(entry.text) === normalizedText);
      const restoredCount = restoreHiddenQuotesByText(view, normalizedText, targetLibrary, { trackHistory: false });

      if (existingAdded) {
        if (restoredCount && options.trackHistory !== false) {
          recordQuoteLibraryAction("restore-hidden", view, existingAdded.id, existingAdded.text, targetLibrary);
        }
        return {
          status: restoredCount ? "restored-added" : "existing-added",
          entry: { id: existingAdded.id, text: existingAdded.text, source: "added" }
        };
      }

      if (defaultEntry) {
        if (restoredCount && options.trackHistory !== false) {
          recordQuoteLibraryAction("restore-hidden", view, defaultEntry.id, defaultEntry.text, targetLibrary);
        }
        return {
          status: restoredCount ? "restored-default" : "existing-default",
          entry: defaultEntry
        };
      }

      const nextEntry = {
        id: createAddedQuoteId(view, normalizedText),
        text: normalizedText,
        createdAt: new Date().toISOString()
      };
      targetLibrary.added[view].push(nextEntry);
      if (options.trackHistory !== false) {
        recordQuoteLibraryAction("add", view, nextEntry.id, nextEntry.text, targetLibrary);
      }
      return {
        status: "added",
        entry: { id: nextEntry.id, text: nextEntry.text, source: "added" }
      };
    }

    function hideQuote(view, meta, text, targetLibrary = quoteLibrary) {
      const normalizedText = normalizeQuoteText(text);
      if (!normalizedText) {
        return;
      }

      const exists = targetLibrary.hidden[view].some((entry) =>
        entry.id === meta.id || normalizeQuoteText(entry.text) === normalizedText
      );
      if (exists) {
        return;
      }

      targetLibrary.hidden[view].push({
        id: meta.id,
        text: normalizedText,
        source: meta.source === "added" ? "added" : "default",
        hiddenAt: new Date().toISOString()
      });
      recordQuoteLibraryAction("hide", view, meta.id, normalizedText, targetLibrary);
    }

    function restoreHiddenQuote(view, quoteId, text, targetLibrary = quoteLibrary) {
      const beforeSize = targetLibrary.hidden[view].length;
      targetLibrary.hidden[view] = targetLibrary.hidden[view].filter((entry) =>
        entry.id !== quoteId && normalizeQuoteText(entry.text) !== normalizeQuoteText(text)
      );
      if (targetLibrary.hidden[view].length !== beforeSize) {
        recordQuoteLibraryAction("restore-hidden", view, quoteId, text, targetLibrary);
      }
    }

    function restoreHiddenQuotesByText(view, text, targetLibrary = quoteLibrary, options = {}) {
      const normalizedText = normalizeQuoteText(text);
      const beforeSize = targetLibrary.hidden[view].length;
      targetLibrary.hidden[view] = targetLibrary.hidden[view].filter((entry) =>
        normalizeQuoteText(entry.text) !== normalizedText
      );
      const restored = beforeSize - targetLibrary.hidden[view].length;
      if (restored && options.trackHistory !== false) {
        recordQuoteLibraryAction("restore-hidden", view, "", normalizedText, targetLibrary);
      }
      return restored;
    }

    function removeAddedQuote(view, quoteId, targetLibrary = quoteLibrary) {
      const removedEntry = targetLibrary.added[view].find((entry) => entry.id === quoteId);
      targetLibrary.added[view] = targetLibrary.added[view].filter((entry) => entry.id !== quoteId);
      targetLibrary.hidden[view] = targetLibrary.hidden[view].filter((entry) => entry.id !== quoteId);
      if (removedEntry) {
        recordQuoteLibraryAction("remove-added", view, removedEntry.id, removedEntry.text, targetLibrary);
      }
    }

    function recordQuoteLibraryAction(action, view, quoteId, text, targetLibrary = quoteLibrary) {
      const normalizedText = normalizeQuoteText(text);
      if (!normalizedText) {
        return;
      }

      targetLibrary.history.push({
        id: createTaskId(),
        action,
        view,
        quoteId,
        text: normalizedText,
        actedAt: new Date().toISOString()
      });
      targetLibrary.history = targetLibrary.history.slice(-200);
    }

    function addTask() {
      const text = taskInput.value.trim();
      if (!text) {
        taskInput.focus();
        return;
      }

      const type = state.currentView === "monthly" ? "monthly" : "daily";
      const dateKey = type === "monthly"
        ? formatMonthKey(state.monthViewDate)
        : state.selectedDateKey;
      const deadline = deadlineInput.value || defaultDeadlineFor(type, dateKey);
      const spanStartKey = type === "monthly" ? `${dateKey}-01` : state.selectedDateKey;
      const rawSpanEndKey = type === "monthly" ? getLastDayOfMonthKey(dateKey) : spanStartKey;
      let spanEndKey = compareDateKeys(rawSpanEndKey, spanStartKey) < 0 ? spanStartKey : rawSpanEndKey;
      const deadlineDateKey = extractDateKeyFromDateTime(deadline);
      if (type === "daily" && deadlineDateKey && compareDateKeys(deadlineDateKey, spanEndKey) > 0) {
        spanEndKey = deadlineDateKey;
      }

      tasks.unshift({
        id: createTaskId(),
        text,
        done: false,
        type,
        dateKey,
        spanStartKey,
        spanEndKey,
        deadline,
        createdAt: new Date().toISOString(),
        completedAt: ""
      });

      taskInput.value = "";
      syncDefaultDeadline(true);
      commit();
      taskInput.focus();
    }

    function addMonthlyTask() {
      const text = monthlyTaskInput.value.trim();
      if (!text) {
        monthlyTaskInput.focus();
        return;
      }

      const dateKey = formatMonthKey(state.monthViewDate);
      const deadline = monthlyDeadlineInput.value || defaultDeadlineFor("monthly", dateKey);
      const spanStartKey = `${dateKey}-01`;
      const rawSpanEndKey = monthlySpanEndInput.value || getLastDayOfMonthKey(dateKey);
      let spanEndKey = compareDateKeys(rawSpanEndKey, spanStartKey) < 0 ? spanStartKey : rawSpanEndKey;
      const deadlineDateKey = extractDateKeyFromDateTime(deadline);
      if (deadlineDateKey && compareDateKeys(deadlineDateKey, spanEndKey) > 0) {
        spanEndKey = deadlineDateKey;
      }

      tasks.unshift({
        id: createTaskId(),
        text,
        done: false,
        type: "monthly",
        dateKey,
        spanStartKey,
        spanEndKey,
        deadline,
        createdAt: new Date().toISOString(),
        completedAt: ""
      });

      monthlyTaskInput.value = "";
      monthlySpanEndInput.value = "";
      syncMonthlyDeadline(true);
      syncMonthlySpanEndInput(true);
      commit();
      monthlyTaskInput.focus();
    }

    function toggleTask(id, done) {
      tasks = tasks.map((task) => (
        task.id === id
          ? { ...task, done, completedAt: done ? new Date().toISOString() : "" }
          : task
      ));
      commit();
    }

    function editTask(id) {
      const target = tasks.find((task) => task.id === id);
      if (!target) {
        return;
      }

      const nextText = prompt("修改任务内容：", target.text);
      if (nextText === null) {
        return;
      }

      const trimmed = nextText.trim();
      if (!trimmed) {
        alert("任务内容不能为空。");
        return;
      }

      tasks = tasks.map((task) => (
        task.id === id ? { ...task, text: trimmed } : task
      ));
      commit();
    }

    function deleteTask(id) {
      tasks = tasks.filter((task) => task.id !== id);
      commit();
    }

    function clearCompletedTasks() {
      const visibleTasks = getVisibleTasks();
      const completedVisible = visibleTasks.filter((task) => task.done).length;
      if (!completedVisible) {
        alert("当前视图没有已完成任务可清除。");
        return;
      }

      const confirmed = confirm(`确定清除当前视图中 ${completedVisible} 个已完成任务吗？`);
      if (!confirmed) {
        return;
      }

      const visibleIds = new Set(visibleTasks.filter((task) => task.done).map((task) => task.id));
      tasks = tasks.filter((task) => !visibleIds.has(task.id));
      commit();
    }

    function deleteCurrentViewTasks() {
      const visibleTasks = getVisibleTasks();
      if (!visibleTasks.length) {
        alert("当前视图已经没有任务了。");
        return;
      }

      const viewName = state.currentView === "daily"
        ? `${state.selectedDateKey} 的日度任务`
        : `${formatMonthKey(state.monthViewDate)} 的月度任务`;
      const confirmed = confirm(`确定删除 ${viewName} 吗？此操作不可撤销。`);
      if (!confirmed) {
        return;
      }

      const visibleIds = new Set(visibleTasks.map((task) => task.id));
      tasks = tasks.filter((task) => !visibleIds.has(task.id));
      commit();
    }

    function clearCompletedMonthlyTasks() {
      const monthKey = formatMonthKey(state.monthViewDate);
      const monthTasks = tasks.filter((task) => task.type === "monthly" && task.dateKey === monthKey);
      const completedVisible = monthTasks.filter((task) => task.done).length;
      if (!completedVisible) {
        alert("当前月份没有已完成任务可清除。");
        return;
      }

      const confirmed = confirm(`确定清除当前月份中 ${completedVisible} 个已完成任务吗？`);
      if (!confirmed) {
        return;
      }

      const visibleIds = new Set(monthTasks.filter((task) => task.done).map((task) => task.id));
      tasks = tasks.filter((task) => !visibleIds.has(task.id));
      commit();
    }

    function deleteAllMonthlyTasks() {
      const monthKey = formatMonthKey(state.monthViewDate);
      const monthTasks = tasks.filter((task) => task.type === "monthly" && task.dateKey === monthKey);
      if (!monthTasks.length) {
        alert("当前月份已经没有任务了。");
        return;
      }

      const confirmed = confirm(`确定删除 ${formatMonthLabel(monthKey)} 的全部月度任务吗？此操作不可撤销。`);
      if (!confirmed) {
        return;
      }

      const visibleIds = new Set(monthTasks.map((task) => task.id));
      tasks = tasks.filter((task) => !visibleIds.has(task.id));
      commit();
    }

    function exportTasks() {
      const payload = {
        app: "日行小记",
        version: 4,
        exportedAt: new Date().toISOString(),
        settings,
        tasks,
        reviews,
        quoteState,
        quoteLibrary
      };

      const blob = new Blob(
        [JSON.stringify(payload, null, 2)],
        { type: "application/json;charset=utf-8" }
      );
      const dateTag = new Date().toISOString().slice(0, 10);
      const link = document.createElement("a");
      const objectUrl = URL.createObjectURL(blob);
      link.href = objectUrl;
      link.download = `日行小记-备份-${dateTag}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    }

    function importTasksFromFile(event) {
      const [file] = event.target.files || [];
      if (!file) {
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        try {
          const imported = parseImportedTasks(reader.result);
          const confirmed = confirm(`确定导入 ${imported.length} 个任务并覆盖当前清单吗？`);
          if (!confirmed) {
            return;
          }

          tasks = imported;
          commit("import");
          alert("备份已导入。");
        } catch (error) {
          alert("导入失败：备份文件格式无效。");
        } finally {
          importFileInput.value = "";
        }
      };

      reader.onerror = () => {
        alert("导入失败：无法读取该文件。");
        importFileInput.value = "";
      };

      reader.readAsText(file, "UTF-8");
    }

    function parseImportedTasks(raw) {
      const parsed = JSON.parse(raw);
      const candidateTasks = Array.isArray(parsed) ? parsed : parsed.tasks;
      if (parsed && typeof parsed === "object" && parsed.settings) {
        saveSettings(parsed.settings, { skipSnapshot: true });
        syncSettingsInputs();
      }
      if (parsed && typeof parsed === "object" && parsed.reviews) {
        reviews = normalizeReviews(parsed.reviews);
        saveReviews(reviews, { skipSnapshot: true });
      }
      if (parsed && typeof parsed === "object" && (parsed.quoteLibrary || parsed.quoteState)) {
        quoteLibrary = normalizeQuoteLibrary(parsed.quoteLibrary);
        quoteState = normalizeQuoteState(parsed.quoteState, quoteLibrary);
        persistQuotePreferences({ skipSnapshot: true });
      }
      return normalizeTasks(candidateTasks, false);
    }

    function commit(reason = "tasks") {
      saveTasks(tasks, { reason });
      renderAll();
    }

    function renderAll() {
      renderCalendar();
      renderTaskList();
      renderStats();
      renderDailyTimeline();
      renderMonthlyView();
      renderMonthlyTaskList();
      renderMonthlyStats();
      renderDailyReview();
      renderMonthlyReview();
      renderFocusSummary();
      renderQuoteCard();
      updateTabState();
    }

    function renderDailyReview() {
      renderReviewPanel({
        type: "daily",
        scopeElement: dailyReviewScope,
        inputElement: dailyReviewInput,
        metaElement: dailyReviewMeta,
        key: state.selectedDateKey,
        label: formatDateLabel(state.selectedDateKey),
        emptyText: "当前还没有保存这一天的复盘。"
      });
    }

    function renderMonthlyReview() {
      const monthKey = formatMonthKey(state.monthViewDate);
      renderReviewPanel({
        type: "monthly",
        scopeElement: monthlyReviewScope,
        inputElement: monthlyReviewInput,
        metaElement: monthlyReviewMeta,
        key: monthKey,
        label: formatMonthLabel(monthKey),
        emptyText: "当前还没有保存这个月的复盘。"
      });
    }

    function renderReviewPanel({ type, scopeElement, inputElement, metaElement, key, label, emptyText }) {
      const entry = reviews[type]?.[key];
      const sameScope = inputElement.dataset.reviewType === type && inputElement.dataset.reviewKey === key;
      const keepDraft = sameScope && inputElement.dataset.dirty === "true";
      scopeElement.textContent = label;
      if (!keepDraft) {
        inputElement.value = entry?.content || "";
        delete inputElement.dataset.dirty;
      }
      inputElement.dataset.reviewType = type;
      inputElement.dataset.reviewKey = key;
      metaElement.textContent = entry?.updatedAt
        ? keepDraft
          ? "内容已修改，点击保存后会保存在本地浏览器中。"
          : `上次保存：${formatDateTime(entry.updatedAt)}`
        : keepDraft
          ? "内容已修改，点击保存后会保存在本地浏览器中。"
          : emptyText;
    }

    function handleReviewShortcut(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        if (event.currentTarget === dailyReviewInput) {
          saveDailyReview();
        } else if (event.currentTarget === monthlyReviewInput) {
          saveMonthlyReview();
        }
      }
    }

    function markReviewDirty(type) {
      const inputElement = type === "monthly" ? monthlyReviewInput : dailyReviewInput;
      const metaElement = type === "monthly" ? monthlyReviewMeta : dailyReviewMeta;
      inputElement.dataset.dirty = "true";
      metaElement.textContent = "内容已修改，点击保存后会保存在本地浏览器中。";
    }

    function saveDailyReview() {
      if (!saveReviewEntry("daily", state.selectedDateKey, dailyReviewInput.value)) {
        return;
      }
      renderDailyReview();
    }

    function saveMonthlyReview() {
      const monthKey = formatMonthKey(state.monthViewDate);
      if (!saveReviewEntry("monthly", monthKey, monthlyReviewInput.value)) {
        return;
      }
      renderMonthlyReview();
    }

    function saveReviewEntry(type, key, content) {
      const trimmed = content.trim();
      if (!trimmed) {
        const message = type === "monthly" ? "月度复盘内容不能为空。" : "日度复盘内容不能为空。";
        alert(message);
        return false;
      }

      reviews = {
        ...reviews,
        [type]: {
          ...reviews[type],
          [key]: {
            content: trimmed,
            updatedAt: new Date().toISOString()
          }
        }
      };
      saveReviews(reviews);
      return true;
    }

    function clearDailyReview() {
      clearReviewEntry("daily", state.selectedDateKey, dailyReviewInput.value, "确定清空这一天的复盘吗？");
      renderDailyReview();
    }

    function clearMonthlyReview() {
      const monthKey = formatMonthKey(state.monthViewDate);
      clearReviewEntry("monthly", monthKey, monthlyReviewInput.value, "确定清空这个月的复盘吗？");
      renderMonthlyReview();
    }

    function clearReviewEntry(type, key, currentValue, message) {
      if (!reviews[type]?.[key] && !currentValue.trim()) {
        return;
      }

      if (!confirm(message)) {
        return;
      }

      const nextBucket = { ...reviews[type] };
      delete nextBucket[key];
      reviews = {
        ...reviews,
        [type]: nextBucket
      };
      saveReviews(reviews);
    }

    function renderTaskList() {
      const visibleTasks = getVisibleTasks().sort(compareTasks);
      if (!visibleTasks.length) {
        taskList.innerHTML = `
          <li class="empty-state">
            这一天还没有任务。先在上方写下一件要完成的小事，或者切到月度安排看看长期任务。
          </li>
        `;
        return;
      }

      const markup = visibleTasks.map(renderTaskItemMarkup).join("");

      taskList.innerHTML = markup;
    }

    function renderStats() {
      const visibleTasks = getVisibleTasks();
      const completed = visibleTasks.filter((task) => task.done).length;
      const pending = visibleTasks.length - completed;
      const attention = visibleTasks.filter((task) => {
        const status = getTaskStatus(task);
        return !task.done && (status === "upcoming" || status === "overdue");
      }).length;

      totalCount.textContent = String(visibleTasks.length);
      pendingCount.textContent = String(pending);
      completedCount.textContent = String(completed);
      attentionCount.textContent = String(attention);
    }

    function renderDailyTimeline() {
      const dailyTasks = tasks
        .filter((task) => task.type === "daily" && taskCoversDate(task, state.selectedDateKey))
        .sort(compareTasks);

      timelineDate.textContent = formatDateLabel(state.selectedDateKey);

      if (!dailyTasks.length) {
        timelineList.innerHTML = `
          <li class="empty-state">
            这一天还没有安排时间点。添加带截止时间的任务后，会按时间顺序显示在这里。
          </li>
        `;
        return;
      }

      timelineList.innerHTML = dailyTasks.map((task) => {
        const status = getTaskStatus(task);
        const statusText = task.done
          ? "已完成"
          : status === "overdue"
            ? "已超时"
            : status === "upcoming"
              ? "临近截止"
              : "进行中";

        return `
          <li class="timeline-item">
            <div class="timeline-time">${escapeHtml(formatTimelineTime(task.deadline))}</div>
            <div class="timeline-body">
              <div class="timeline-task ${task.done ? "is-done" : ""}">${escapeHtml(task.text)}</div>
              <div class="timeline-meta">
                <span class="timeline-tag ${statusClassName(status)}">${statusText}</span>
                ${task.done && task.completedAt ? `<span class="timeline-tag success">完成于 ${escapeHtml(formatDateTime(task.completedAt))}</span>` : ""}
              </div>
            </div>
          </li>
        `;
      }).join("");
    }

    function renderCalendar() {
      calendarTitle.textContent = formatMonthTitle(state.calendarMonth);
      const firstDay = startOfMonth(state.calendarMonth);
      const firstWeekday = (firstDay.getDay() + 6) % 7;
      const startDate = new Date(firstDay);
      startDate.setDate(firstDay.getDate() - firstWeekday);

      const cells = [];
      for (let i = 0; i < 42; i += 1) {
        const current = new Date(startDate);
        current.setDate(startDate.getDate() + i);
        const dateKey = formatDateKey(current);
        const dailyTasks = tasks.filter((task) => task.type === "daily" && taskCoversDate(task, dateKey));
        const classes = [
          "calendar-day",
          current.getMonth() !== firstDay.getMonth() ? "other-month" : "",
          dateKey === state.selectedDateKey ? "selected" : "",
          dateKey === todayKey ? "today" : ""
        ].filter(Boolean).join(" ");
        const counts = summarizeTaskSignals(dailyTasks);

        cells.push(`
          <button class="${classes}" type="button" data-date="${dateKey}">
            <span class="day-number">${current.getDate()}</span>
            <div class="day-meta">${dailyTasks.length ? `${dailyTasks.length} 项` : "空白"}</div>
            <div class="day-dot-row">
              ${counts.pending ? `<span class="day-dot"></span>` : ""}
              ${counts.upcoming ? `<span class="day-dot warn"></span>` : ""}
              ${counts.overdue ? `<span class="day-dot danger"></span>` : ""}
            </div>
          </button>
        `);
      }

      calendarGrid.innerHTML = cells.join("");
    }

    function renderMonthlyView() {
      const monthKey = formatMonthKey(state.monthViewDate);
      monthViewTitle.textContent = `${formatMonthLabel(monthKey)} 月度任务`;
      monthlyComposerHint.textContent = `当前会添加到 ${formatMonthLabel(monthKey)} 的月度清单`;
      syncMonthlyDeadline(false);
      syncMonthlySpanEndInput(false);
    }

    function renderMonthlyTaskList() {
      const monthKey = formatMonthKey(state.monthViewDate);
      const monthTasks = tasks
        .filter((task) => task.type === "monthly" && task.dateKey === monthKey)
        .sort(compareTasks);

      if (!monthTasks.length) {
        monthlyTaskList.innerHTML = `
          <li class="empty-state">
            这个月还没有月度任务。把需要跨几周推进的事情放在这里，会比堆在每天列表里更好找。
          </li>
        `;
        return;
      }

      monthlyTaskList.innerHTML = monthTasks.map(renderTaskItemMarkup).join("");
    }

    function renderMonthlyStats() {
      const monthKey = formatMonthKey(state.monthViewDate);
      const visibleTasks = tasks.filter((task) => task.type === "monthly" && task.dateKey === monthKey);
      const completed = visibleTasks.filter((task) => task.done).length;
      const pending = visibleTasks.length - completed;
      const attention = visibleTasks.filter((task) => {
        const status = getTaskStatus(task);
        return !task.done && (status === "upcoming" || status === "overdue");
      }).length;

      monthlyTotalCount.textContent = String(visibleTasks.length);
      monthlyPendingCount.textContent = String(pending);
      monthlyCompletedCount.textContent = String(completed);
      monthlyAttentionCount.textContent = String(attention);
    }

    function renderFocusSummary() {
      if (state.currentView === "daily") {
        focusSummary.textContent = `${formatDateLabel(state.selectedDateKey)} · ${getVisibleTasks().length} 项任务`;
      } else {
        focusSummary.textContent = `${formatMonthLabel(formatMonthKey(state.monthViewDate))} · ${getVisibleTasks().length} 项任务`;
      }
    }

    function switchView(view) {
      state.currentView = view;
      renderAll();
    }

    function updateTabState() {
      const isDaily = state.currentView === "daily";
      dailyTabBtn.classList.toggle("active", isDaily);
      monthlyTabBtn.classList.toggle("active", !isDaily);
      dailyView.classList.toggle("active", isDaily);
      monthlyView.classList.toggle("active", !isDaily);
      updateDeadlineField();
    }

    function updateDeadlineField() {
      const type = state.currentView === "monthly" ? "monthly" : "daily";
      deadlineLabel.textContent = type === "monthly" ? "月度截止时间" : "事项结束时间";
      composerHint.textContent = type === "monthly"
        ? `当前会添加到 ${formatMonthLabel(formatMonthKey(state.monthViewDate))} 的月度清单`
        : `当前会添加到 ${formatDateLabel(state.selectedDateKey)} 的日度清单`;
      syncDefaultDeadline(true);
    }

    function syncDefaultDeadline(force = false) {
      if (!force && deadlineInput.value) {
        return;
      }

      const type = state.currentView === "monthly" ? "monthly" : "daily";
      const dateKey = type === "monthly" ? formatMonthKey(state.monthViewDate) : state.selectedDateKey;
      deadlineInput.value = defaultDeadlineFor(type, dateKey);
    }

    function defaultDeadlineFor(type, dateKey) {
      if (type === "monthly") {
        return `${dateKey}-28T21:00`;
      }
      return setTimeForDate(dateKey, 21, 0);
    }

    function syncMonthlyDeadline(force = false) {
      if (!force && monthlyDeadlineInput.value) {
        return;
      }

      const dateKey = formatMonthKey(state.monthViewDate);
      monthlyDeadlineInput.value = defaultDeadlineFor("monthly", dateKey);
    }

    function syncMonthlySpanEndInput(force = false) {
      if (!force && monthlySpanEndInput.value) {
        return;
      }

      monthlySpanEndInput.value = getLastDayOfMonthKey(formatMonthKey(state.monthViewDate));
    }

    function getVisibleTasks() {
      if (state.currentView === "monthly") {
        const monthKey = formatMonthKey(state.monthViewDate);
        return tasks.filter((task) => task.type === "monthly" && task.dateKey === monthKey);
      }
      return tasks.filter((task) => task.type === "daily" && taskCoversDate(task, state.selectedDateKey));
    }

    function compareTasks(a, b) {
      const timeA = new Date(a.deadline).getTime();
      const timeB = new Date(b.deadline).getTime();
      const safeTimeA = Number.isNaN(timeA) ? Number.MAX_SAFE_INTEGER : timeA;
      const safeTimeB = Number.isNaN(timeB) ? Number.MAX_SAFE_INTEGER : timeB;
      if (safeTimeA !== safeTimeB) {
        return safeTimeA - safeTimeB;
      }

      const createdA = new Date(a.createdAt || 0).getTime();
      const createdB = new Date(b.createdAt || 0).getTime();
      const safeCreatedA = Number.isNaN(createdA) ? 0 : createdA;
      const safeCreatedB = Number.isNaN(createdB) ? 0 : createdB;
      if (safeCreatedA !== safeCreatedB) {
        return safeCreatedA - safeCreatedB;
      }

      return 0;
    }

    function getTaskStatus(task) {
      if (task.done) {
        return "done";
      }

      const deadlineTime = new Date(task.deadline).getTime();
      const now = Date.now();
      if (Number.isNaN(deadlineTime)) {
        return "normal";
      }
      const hoursUntilDeadline = (deadlineTime - now) / 36e5;
      if (hoursUntilDeadline <= -settings.dangerHours) {
        return "overdue";
      }
      if (hoursUntilDeadline <= settings.warningHours) {
        return "upcoming";
      }
      return "normal";
    }

    function statusClassName(status) {
      if (status === "upcoming") {
        return "warn";
      }
      if (status === "overdue") {
        return "danger";
      }
      if (status === "done") {
        return "success";
      }
      return "";
    }

    function deadlineTagText(task, status) {
      const prefix = task.type === "monthly" ? "截止" : "截至";
      if (status === "overdue") {
        return `已超时 · ${formatDateTime(task.deadline)}`;
      }
      if (status === "upcoming") {
        return `临近截止 · ${formatDateTime(task.deadline)}`;
      }
      return `${prefix} ${formatDateTime(task.deadline)}`;
    }

    function renderTaskItemMarkup(task) {
      const status = getTaskStatus(task);
      const classes = [
        "task-item",
        task.done ? "completed" : "",
        !task.done && status === "upcoming" ? "is-upcoming" : "",
        !task.done && status === "overdue" ? "is-overdue" : ""
      ].filter(Boolean).join(" ");

      return `
        <li class="${classes}">
          <div class="task-main">
            <input
              class="task-checkbox"
              type="checkbox"
              data-role="toggle"
              data-id="${escapeHtml(task.id)}"
              ${task.done ? "checked" : ""}
              aria-label="切换任务完成状态"
            >
            <div class="task-body">
              <div class="task-line">${escapeHtml(task.text)}</div>
              <div class="task-tags">
                <span class="task-tag">${task.type === "daily" ? "日度任务" : "月度任务"}</span>
                <span class="task-tag">${task.type === "daily" ? formatDateLabel(task.dateKey) : formatMonthLabel(task.dateKey)}</span>
                ${task.type === "daily" && (task.spanStartKey || task.dateKey) !== task.dateKey ? `<span class="task-tag">起始于 ${escapeHtml(formatDateLabel(task.spanStartKey || task.dateKey))}</span>` : ""}
                <span class="task-tag ${statusClassName(status)}">${deadlineTagText(task, status)}</span>
                ${task.done && task.completedAt ? `<span class="task-tag success">完成于 ${escapeHtml(formatDateTime(task.completedAt))}</span>` : ""}
              </div>
            </div>
          </div>
          <div class="task-actions">
            <button
              class="icon-btn"
              type="button"
              data-action="edit"
              data-id="${escapeHtml(task.id)}"
              aria-label="编辑任务"
              title="编辑任务"
            >✏️</button>
            <button
              class="icon-btn delete"
              type="button"
              data-action="delete"
              data-id="${escapeHtml(task.id)}"
              aria-label="删除任务"
              title="删除任务"
            >🗑️</button>
          </div>
        </li>
      `;
    }

    function summarizeTaskSignals(taskGroup) {
      return taskGroup.reduce((acc, task) => {
        const status = getTaskStatus(task);
        if (!task.done) {
          acc.pending += 1;
        }
        if (status === "upcoming") {
          acc.upcoming += 1;
        }
        if (status === "overdue") {
          acc.overdue += 1;
        }
        return acc;
      }, { pending: 0, upcoming: 0, overdue: 0 });
    }

    function renderDate() {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
      });
      currentDate.textContent = formatter.format(now);
    }

    function refreshDateAtMidnight() {
      const now = new Date();
      const nextMidnight = new Date(now);
      nextMidnight.setHours(24, 0, 0, 0);
      const timeout = nextMidnight.getTime() - now.getTime();

      setTimeout(() => {
        renderDate();
        renderAll();
        refreshDateAtMidnight();
      }, timeout);
    }

    function initInstallSupport() {
      const isSecureLocal =
        window.location.protocol === "https:" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost";

      if (!isSecureLocal) {
        installCard.classList.add("show");
        installAppBtn.hidden = true;
        installNote.textContent = "双击本地文件可以直接使用；若要安装到桌面，请先用本地预览地址或正式网址打开。";
        return;
      }

      installCard.classList.add("show");
      installAppBtn.hidden = true;
      installNote.textContent = "当前环境支持安装；若浏览器允许，会显示一键安装入口。";

      window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredInstallPrompt = event;
        installAppBtn.hidden = false;
        installNote.textContent = "可将日行小记安装到桌面或手机主屏幕，数据仍保存在当前浏览器。";
      });

      window.addEventListener("appinstalled", () => {
        deferredInstallPrompt = null;
        installAppBtn.hidden = true;
        installNote.textContent = "已安装。以后可直接从桌面或主屏幕打开。";
      });

      if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
        navigator.serviceWorker.register("./service-worker.js").catch(() => {});
      }
    }

    async function handleInstallApp() {
      if (!deferredInstallPrompt) {
        showInstallHelp();
        return;
      }

      const confirmed = window.confirm("将“日行小记”安装到桌面或主屏幕？");
      if (!confirmed) {
        return;
      }

      deferredInstallPrompt.prompt();
      const result = await deferredInstallPrompt.userChoice;
      if (result.outcome === "accepted") {
        installAppBtn.hidden = true;
        installNote.textContent = "安装请求已接受，桌面入口会由浏览器创建。";
      }
      deferredInstallPrompt = null;
    }

    function showInstallHelp() {
      openManual("manual-install", { forceHighlight: true });
    }

    function startOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    function shiftMonth(date, offset) {
      return new Date(date.getFullYear(), date.getMonth() + offset, 1);
    }

    function formatDateKey(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function formatMonthKey(date) {
      if (typeof date === "string") {
        return date.slice(0, 7);
      }
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${year}-${month}`;
    }

    function parseDateKey(dateKey) {
      return new Date(`${dateKey}T00:00:00`);
    }

    function extractDateKeyFromDateTime(value) {
      if (typeof value !== "string") {
        return "";
      }
      const match = value.match(/^(\d{4}-\d{2}-\d{2})T/);
      return match ? match[1] : "";
    }

    function setTimeForDate(dateKey, hours, minutes) {
      return `${dateKey}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    }

    function formatDateLabel(dateKey) {
      return new Intl.DateTimeFormat("zh-CN", {
        month: "long",
        day: "numeric",
        weekday: "long"
      }).format(parseDateKey(dateKey));
    }

    function formatMonthLabel(monthKey) {
      const [year, month] = monthKey.split("-");
      return `${year}年${Number(month)}月`;
    }

    function getLastDayOfMonthKey(monthKey) {
      const [year, month] = monthKey.split("-").map(Number);
      return formatDateKey(new Date(year, month, 0));
    }

    function compareDateKeys(a, b) {
      return a.localeCompare(b);
    }

    function taskCoversDate(task, dateKey) {
      const startKey = task.spanStartKey || task.dateKey;
      const endKey = task.spanEndKey || startKey;
      return compareDateKeys(startKey, dateKey) <= 0 && compareDateKeys(dateKey, endKey) <= 0;
    }

    function formatSpanLabel(task) {
      const startKey = task.spanStartKey || task.dateKey;
      const endKey = task.spanEndKey || startKey;
      if (startKey === endKey) {
        return `跨度 ${formatDateLabel(startKey)}`;
      }
      return `跨度 ${formatDateLabel(startKey)} - ${formatDateLabel(endKey)}`;
    }

    function formatMonthTitle(date) {
      return new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "long"
      }).format(date);
    }

    function formatDateTime(value) {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return "未设置";
      }
      return new Intl.DateTimeFormat("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    }

    function formatTimelineTime(value) {
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) {
        return "--:--";
      }
      return new Intl.DateTimeFormat("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(date);
    }

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
    }

    function normalizeQuoteText(value) {
      return typeof value === "string"
        ? value.replace(/\s+/g, " ").trim()
        : "";
    }

    function createAddedQuoteId(view, text) {
      return `${view}-added-${hashText(text)}`;
    }

    function createTemporaryQuoteId(view, text) {
      return `${view}-temp-${hashText(text)}`;
    }

    function hashText(value) {
      let hash = 2166136261;
      const input = normalizeQuoteText(value);
      for (let index = 0; index < input.length; index += 1) {
        hash ^= input.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }
      return (hash >>> 0).toString(16);
    }

    function sanitizeHourValue(value, fallback) {
      const numeric = Number(value);
      if (!Number.isFinite(numeric) || numeric < 0) {
        return fallback;
      }
      return Math.floor(numeric);
    }
  
