import type nodeProcess from "node:process";

export {
  _debugEnd,
  _debugProcess,
  // @ts-expect-error polyfill not implemented yet in unenv
  _events,
  _eventsCount,
  // @ts-expect-error polyfill not implemented yet in unenv
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  // @ts-expect-error polyfill not implemented yet in unenv
  _linkedBinding,
  // @ts-expect-error polyfill not implemented yet in unenv
  _maxListeners,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert,
  availableMemory,
  binding,
  chdir,
  config,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  // @ts-expect-error polyfill not implemented yet in unenv
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exit,
  exitCode,
  features,
  getActiveResourcesInfo,
  getMaxListeners,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime,
  // @ts-expect-error polyfill not implemented yet in unenv
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  // @ts-expect-error polyfill not implemented yet in unenv
  moduleLoadList,
  off,
  on,
  once,
  // @ts-expect-error polyfill not implemented yet in unenv
  openStdin,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  // @ts-expect-error polyfill not implemented yet in unenv
  reallyExit,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  setUncaughtExceptionCaptureCallback,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  umask,
  uptime,
  version,
  versions,
} from "./internal/process";

import {
  _debugEnd,
  _debugProcess,
  // @ts-expect-error polyfill not implemented yet in unenv
  _events,
  _eventsCount,
  // @ts-expect-error polyfill not implemented yet in unenv
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  // @ts-expect-error polyfill not implemented yet in unenv
  _linkedBinding,
  // @ts-expect-error polyfill not implemented yet in unenv
  _maxListeners,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert,
  availableMemory,
  binding,
  chdir,
  config,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  // @ts-expect-error polyfill not implemented yet in unenv
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exit,
  exitCode,
  features,
  getActiveResourcesInfo,
  getMaxListeners,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime,
  // @ts-expect-error polyfill not implemented yet in unenv
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  // @ts-expect-error polyfill not implemented yet in unenv
  moduleLoadList,
  off,
  on,
  once,
  // @ts-expect-error polyfill not implemented yet in unenv
  openStdin,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  // @ts-expect-error polyfill not implemented yet in unenv
  reallyExit,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  setUncaughtExceptionCaptureCallback,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  umask,
  uptime,
  version,
  versions,
} from "./internal/process";

// @ts-expect-error typings are not up to date, but this API exists, see: https://github.com/cloudflare/workerd/pull/2147
const workerdProcess = process.getBuiltinModule("node:process");

// TODO: Ideally this list is not hardcoded but instead is generated when the preset is being generated in the `env()` call
//       This generation should use information from https://github.com/cloudflare/workerd/issues/2097
export const { env, nextTick } = workerdProcess;

export default {
  /**
   * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
   */
  // @ts-expect-error undocumented public API
  _debugEnd,
  _debugProcess,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _linkedBinding,
  _maxListeners,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert,
  availableMemory,
  binding,
  chdir,
  config,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exit,
  exitCode,
  features,
  getActiveResourcesInfo,
  getMaxListeners,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  moduleLoadList,
  off,
  on,
  once,
  openStdin,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  setUncaughtExceptionCaptureCallback,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  umask,
  uptime,
  version,
  versions,

  /**
   * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
   */
  env,
  nextTick,
} satisfies typeof nodeProcess;