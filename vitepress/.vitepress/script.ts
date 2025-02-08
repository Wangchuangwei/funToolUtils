import { basename } from 'path';
import info from '../temp/info.json'
import fg from 'fast-glob'

type CBaseDocs = {
  [key: string]: {
    text: string;
    items: any[];
    collapsed: boolean;
  }
}

type Citem = {
  functionNm: string,
  folderNm: string
}

export default function getDosc(docsPath: string, filePath: string) {
  const baseDocs = Object.values(info).reduce((obj: CBaseDocs, item: Citem): CBaseDocs => {
    obj[item.folderNm.toLowerCase()] = {
      text: item.folderNm,
      items: [],
      collapsed: true
    }
    return obj
  }, {})
  /**
   * 递归生成文档树结构
   * @param file 文件名，用于提取当前处理的文档路径
   * @param prefix 前缀，用于拼接文档路径
   */
  function getTree(file: string, prefix: string) {
    // 分割文件名，获取当前处理的路径和剩余路径
    const [cur, ...rest] = file.replace('.md', '').split('.')
    // 拼接当前路径与前缀，形成完整的路径
    const curPath = prefix + cur
    // 获取当前路径对应的文档信息
    const infoCur = info[cur]
    // 如果文档信息存在，将其添加到对应的文档夹中
    
    if (infoCur) {
      baseDocs[infoCur.folderNm].items.push({
        text: infoCur.functionNm,
        link: filePath + curPath + '.md',
      })

    }
    // 如果还有剩余路径，递归调用自身处理剩余路径
    if (rest.length > 0) {
      getTree(rest.join('.'), curPath + '.')
    }
  }
  // 同步获取文档路径下的所有文件，并处理这些文件生成一个树形结构
  fg.sync([docsPath])
    // 将每个文件路径转换为文件名
    .map((path) => basename(path))
    .reduce((tree, file) => {
      // 调用getTree函数，根据文件名和空字符串参数获取树形结构并更新累积的树形结构对象
      getTree(file, '')
      // 返回累积的树形结构对象，作为下一次迭代的基础
      return tree
    }, {})
  return Object.keys(baseDocs).map(item => baseDocs[item])
}